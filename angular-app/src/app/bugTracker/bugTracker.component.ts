import { Component, OnInit } from '@angular/core';

import { IBug } from './models/IBug';


import { BugOperations } from './services/BugOperations.service';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.template.html',
	styleUrls : ['bugTracker.style.css']
})
export class BugTrackerComponent implements OnInit{

	newBugName : string = '';
	bugs : Array<IBug> = [];

	constructor(public bugOperations : BugOperations, private http : Http){
		
	}
	
	ngOnInit(){
		this.http
			.get('http://localhost:3000/bugs')
			.map(response => response.json())
			.subscribe(data => this.bugs = data);
	}

	onAddNewBug(newBugName){
		
		let newBugData = this.bugOperations.createNew(0, newBugName);
		this.http
			.post('http://localhost:3000/bugs', newBugData)
			.map(response => response.json())
			.subscribe(newBug => this.bugs = this.bugs.concat([newBug]));
		

	}

	onBugNameClick(bug){
		var toggledBug = this.bugOperations.toggle(bug);
		this.http
			.put('http://localhost:3000/bugs/' + bug.id, toggledBug)
			.map(response => response.json())
			.subscribe(toggledBug => this.bugs = this.bugs.map(existingBug => existingBug.id === toggledBug.id ? toggledBug : existingBug));
		
	}

	onRemoveClosedClick(){
		let bugsToRemove = this.bugs.filter(bug => bug.isClosed);
	}

}