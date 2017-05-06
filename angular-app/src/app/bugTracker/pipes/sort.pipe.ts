import { Pipe, PipeTransform } from '@angular/core';

interface IComparer{
	(item1 : any, item2 : any):number
}

function getComparer(attrName) : IComparer {
	return function(item1, item2) : number{
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}

function getDescending(comparer) : IComparer{
	return function(item1, item2){
		return comparer(item1, item2) * -1;
	}
}

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	transform(data : Array<any>, attr : string = 'id', descending: boolean = false){
		let comparer = getComparer(attr);
		if (descending){
			comparer = getDescending(comparer);
		}
		for(let i=0; i < data.length-1; i++)
			for(let j = i+1; j < data.length; j++)
				if (comparer(data[i], data[j]) > 0)
					[data[i], data[j]] = [data[j], data[i]];
		return data;
	}
}