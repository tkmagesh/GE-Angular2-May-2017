import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBug } from '../../models/IBug';

@Component({
	selector : 'bug-edit',
	templateUrl : 'bugEdit.template.html',
	styles : []
})
export class BugEditComponent{
	newBugName : string = '';

	@Input()
	bugs : Array<IBug> = [];

	@Output()
	addNewBug : EventEmitter<string> = new EventEmitter<string>();

	onAddNewClick(){
		this.addNewBug.emit(this.newBugName);
	}

}