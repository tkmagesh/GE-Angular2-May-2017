import { Component } from '@angular/core';
import { Calculator } from './calculator';

@Component({
	selector: 'calculator',
	templateUrl: 'calculator.template.html'
})
export class CalculatorComponent{
	calc : Calculator = new Calculator();

	

}