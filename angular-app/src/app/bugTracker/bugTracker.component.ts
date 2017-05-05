import { Component } from '@angular/core';
import { IBug } from './models/IBug';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.template.html',
	styleUrls : ['bugTracker.style.css']
})
export class BugTrackerComponent{
	newBugName : string = '';

	bugs : Array<IBug> = [];
	
	onAddNewClick(){
		let newBug : IBug = {
			name : this.newBugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugNameClick(bug){
		bug.isClosed = !bug.isClosed;
	}

	onRemoveClosedClick(){
		for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index,1);
		}
	}

	getClosedCount(){
		let result = 0;
		for(let bug of this.bugs){
			if (bug.isClosed){
				++result;
			}
		}
		return result;
	}
}