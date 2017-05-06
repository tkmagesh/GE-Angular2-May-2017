import { IBug } from '../models/IBug';
import { BugOperations } from './BugOperations.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BugStorage{

	private currentBugId : number = 0;
	private storage : any = window.localStorage;

	constructor(private bugOperations : BugOperations){

	}

	getAll() : Array<IBug>{
		let result : Array<IBug> = [];
		for(let index = 0; index < this.storage.length; index++){
			let data = this.storage.getItem(this.storage.key(index));
			let bug = JSON.parse(data);
			this.currentBugId = bug.id > this.currentBugId ? bug.id : this.currentBugId;
			result.push(bug);
		}
		return result;
	}

	private save(bug : IBug){
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}

	createNew(bugName : string) : IBug{
		let newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}

	toggle(bug : IBug) : IBug {
		let toggledBug = this.bugOperations.toggle(bug);
		this.save(toggledBug);
		return toggledBug;
	}
	remove(bug : IBug) : void {
		this.storage.removeItem(bug.id.toString());
	}
}