import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({ 
	providedIn: 'root'
}) 
export class ApiService { 
	constructor(private http: HttpClient) { } 
	findItems(name: string) {
		return this.http.get('http://localhost:3000/api/items/find?name=' + name);
	} 

	getItems() {
		return this.http.get('http://localhost:3000/api/items');
	}

	getRandomInventory() {
		return this.http.get('http://localhost:3000/api/generateRandomSetup');
	}

    getActivities () {
        return this.http.get("http://localhost:3000/api/activities");
    }
	
	getAllActivities () {
		return this.http.get("http://localhost:3000/api/allactivities");
	}
}
