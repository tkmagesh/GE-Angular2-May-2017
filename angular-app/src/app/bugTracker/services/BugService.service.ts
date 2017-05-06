import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { IBug } from '../models/IBug'
import { BugOperations } from './BugOperations.service';
import {Http} from '@angular/http';

@Injectable()
export class BugService{

	constructor(private bugOperations : BugOperations, private http : Http){

	}

	getAll() : Observable<Array<IBug>>{
		return this.http
			.get('http://localhost:3000/bugs')
			.map(response => response.json())
	}

	addNew(newBugName : string) : Observable<IBug>{
		let newBugData = this.bugOperations.createNew(0, newBugName);
		return this.http
			.post('http://localhost:3000/bugs', newBugData)
			.map(response => response.json())
	}

	toggle(bug : IBug) : Observable<IBug>{
		var toggledBug = this.bugOperations.toggle(bug);
		return this.http
			.put('http://localhost:3000/bugs/' + bug.id, toggledBug)
			.map(response => response.json());
	}
} 