import { Component, Input } from '@angular/core';

@Component({
	selector : 'calculator-result',
	template : '<div class="result" [ngClass]="{positive : result >= 0, negative : result < 0}">{{result}}</div>',
	styles : ['.result { font-weight : bold; font-size:22pt}', '.positive { color : green}', '.negative {color : red}']

})
export class CalculatorResultComponent{

	@Input()
	result : number = 0;
}