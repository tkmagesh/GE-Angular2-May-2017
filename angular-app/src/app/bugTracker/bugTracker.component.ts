import { Component, OnInit } from '@angular/core';

import { IBug } from './models/IBug';


import { BugStorage } from './services/BugStorage.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.template.html',
	styleUrls : ['bugTracker.style.css']
})
export class BugTrackerComponent implements OnInit{

	newBugName : string = '';
	bugs : Array<IBug> = [];

	constructor(public bugStorage : BugStorage){
		
	}
	
	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
	}

	onAddNewClick(){
		let newBug : IBug = this.bugStorage.createNew(this.newBugName);
		//this.bugs.push(newBug);
		this.bugs = this.bugs.concat([newBug]);
	}

	onBugNameClick(bug){
		var toggledBug = this.bugStorage.toggle(bug);
		this.bugs = this.bugs.map(function(existingBug){
			return existingBug.id === toggledBug.id ? toggledBug : existingBug
		});
	}

	onRemoveClosedClick(){
		for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed){
				this.bugStorage.remove(this.bugs[index]);
				this.bugs.splice(index,1);
			}
		}
	}

}