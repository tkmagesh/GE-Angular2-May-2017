import { Component, Input } from '@angular/core';

@Component({
	selector : 'calculator-result',
	template : '<div class="result">{{result}}</div>',
	styles : ['.result { font-weight : bold; font-size:22pt}']

})
export class CalculatorResultComponent{

	@Input()
	result : number = 0;
}