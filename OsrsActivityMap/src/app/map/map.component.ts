import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, HostListener} from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements OnInit, AfterViewInit  {

  @HostListener('body:mousemove', ['$event'])
  handleMouseMove(event: MouseEvent) {
     this.updateMap(event);
    
  }

  @ViewChild("osrsmapcanvas", {static: false}) mapCanvasElement: ElementRef;
  public activities: Array<activity>;
  public iconScale: number;

  public backgroundImage: HTMLImageElement;
  public circles: Array<Position>;

  constructor(private el: ElementRef, private apiservice: ApiService, private router: Router) {
    this.iconScale = 2;
  }

  ngOnInit(): void {   
   
    this.activities = new Array<activity>();
    this.apiservice.getAllActivities().subscribe(data => {
      if (Array.isArray(data)) {
        let dataArray = data as any[];
        for (let index = 0; index < dataArray.length; index++) {
          const el = dataArray[index];
          this.activities.push(new activity(el.ActivityName, el.SkillName, el.ActivityType, el.RegionName, el.maxGPPerHour, el.minGPPerHour, el.maxXPPerHour, el.minXPPerHour, el.Icon, new Position(el.PositionX, el.positionY)))
        }
      }
    })
  }

  ngAfterViewInit(): void {
    const canvas: HTMLCanvasElement = this.mapCanvasElement.nativeElement;
    const context = canvas.getContext("2d");

    this.backgroundImage = new Image();
    this.backgroundImage.src = "/assets/map/styledMap.jpg";

    if (context) {
      this.backgroundImage.onload = () => {
        this.renderCanvas(context);
        this.activities.forEach(act => {
          act.icon.onload = () => {
            this.renderCanvas(context);
          }
        });
      } 
    }
    
    

  }

  updateMap(e: MouseEvent): void {
    
    let canvas = this.mapCanvasElement.nativeElement;
    let context = canvas.getContext("2d");
    if (canvas) {
      let r = canvas.getBoundingClientRect();
      let cursorPos = new Position(e.clientX - r.left, e.clientY - r.top)
    
   
      this.renderCanvas(context);
      this.activities.forEach(act => {
        if (cursorPos.x >= act.pos.x && cursorPos.x <= act.pos.x + (20 * this.iconScale) && cursorPos.y >= act.pos.y && cursorPos.y <= act.pos.y + (20 * this.iconScale)) {
          
          context.font = "25px serif";
          context.fillStyle = "white";
          context.fillText(act.name, cursorPos.x, cursorPos.y);

        }
      
      });
    }
  }

  setCircles (c: Array<Position>): void {
    this.circles = c;
    this.redrawMap();
  }

  redrawMap(): void {
    let canvas = this.mapCanvasElement.nativeElement;
    let context = canvas.getContext("2d");
    this.renderCanvas(context);
  }

  renderCanvas(context: CanvasRenderingContext2D): void {
    console.log("redrawing");
    context.drawImage(this.backgroundImage,0,0);
    this.drawActivities(context, this.iconScale);
    
  }

  drawActivities(context: CanvasRenderingContext2D, scale: number): void {
    this.activities.forEach(act => {
      context.drawImage(act.icon ,act.pos.x, act.pos.y, act.icon.width * scale, act.icon.height * scale);
    });

    this.circles.forEach(p => {
      context.strokeStyle = "red";
      context.lineWidth = 5;
      context.beginPath();
      context.arc(p.x + (12 * this.iconScale), p.y + (12 * this.iconScale), (20 * this.iconScale), 0, 2*Math.PI);
      context.stroke();
    });
  }

  navigateToActivity(e: MouseEvent): void {
    let canvas = this.mapCanvasElement.nativeElement;
    
    let r = canvas.getBoundingClientRect();
    let cursorPos = new Position(e.clientX - r.left, e.clientY - r.top);

    this.activities.forEach(act => {
      if (cursorPos.x >= act.pos.x && cursorPos.x <= act.pos.x + (20 * this.iconScale) && cursorPos.y >= act.pos.y && cursorPos.y <= act.pos.y + (20 * this.iconScale)) {
        this.router.navigate([act.getLink()]) 
      }
    });
  }



}


class activity {
  
  public name: string;
  public type: string;
  public region: string;
  public skill: string;
  
  public maxGP: number;
  public minGP: number;
  public maxXP: number;
  public minXP: number;

  public icon: HTMLImageElement;

  public pos: Position;

  constructor (name: string, skill: string, type: string, region: string, maxGP: number, minGP: number, maxXP: number, minXP: number, icon: string, pos: Position) {
    this.name = name;
    this.skill = skill;
    this.type = type;
    this.region = region;

    this.maxGP = maxGP;
    this.minGP = minGP;
    this.maxXP = maxXP;
    this.minXP = minXP;

    this.icon = new Image();
    this.icon.src = "/assets/skillIcons/" + icon;

    this.pos = pos;
  }

  public getLink(): string {
    return "/" + this.name.replace(/ /g,"_");
  }
}

class Position {
  public x: number;
  public y: number;

  constructor(x: number, y:number) {
    this.x = x;
    this.y = y;
  }
}