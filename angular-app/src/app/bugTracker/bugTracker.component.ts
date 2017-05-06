import { Component, OnInit } from '@angular/core';

import { IBug } from './models/IBug';


import { BugOperations } from './services/BugOperations.service';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { BugService } from './services/BugService.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.template.html',
	styleUrls : ['bugTracker.style.css']
})
export class BugTrackerComponent implements OnInit{

	newBugName : string = '';
	bugs : Array<IBug> = [];

	constructor(public bugOperations : BugOperations, private http : Http, private bugService : BugService){
		
	}
	
	ngOnInit(){
		this
			.bugService
			.getAll()
			.subscribe(data => this.bugs = data);
	}

	onAddNewBug(newBugName){
		
		this
			.bugService
			.addNew(newBugName)
			.subscribe(newBug => this.bugs = this.bugs.concat([newBug]));
		

	}

	onBugNameClick(bug){
		this
			.bugService
			.toggle(bug)
			.subscribe(toggledBug => this.bugs = this.bugs.map(existingBug => existingBug.id === toggledBug.id ? toggledBug : existingBug));
		
	}

	onRemoveClosedClick(){
		let bugsToRemove = this.bugs.filter(bug => bug.isClosed);
	}

}