import { Component, Input } from '@angular/core';
import { IBug } from '../../models/IBug';

@Component({
	selector : 'bug-stats',
	templateUrl : 'bugStats.template.html',
	styles : [ '.stats{font-size: 22pt;}']
})
export class BugStatsComponent{
	@Input()
	bugs : Array<IBug> = [];
}