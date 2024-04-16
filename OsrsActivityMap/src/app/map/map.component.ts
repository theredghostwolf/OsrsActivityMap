import { Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit, AfterViewInit  {

  @ViewChild("osrsmapcanvas", {static: false}) mapCanvasElement: ElementRef;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const canvas: HTMLCanvasElement = this.mapCanvasElement.nativeElement;
  }

}
