import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
	name : 'closedCount'
})
export class ClosedCountPipe implements PipeTransform{
	transform(bugs : Array<IBug>) : number {
		return bugs.reduce(function(result, bug){
			return bug.isClosed ? ++result : result;
		}, 0);
	}
}