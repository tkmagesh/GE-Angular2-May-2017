import { Component } from '@angular/core';

@Component({
	selector: 'calculator',
	templateUrl: 'calculator.template.html'
})
export class CalculatorComponent{
	number1 : number = 0;
	number2 : number = 0;
	result : number = 0;
	operation : string = '';

	onCalculateClick(){
		switch (this.operation) {
			case "add":
				this.result = this.number1 + this.number2;
				break;
			case "subtract":
				this.result = this.number1 - this.number2;
				break;
			case "multiply":
				this.result = this.number1 * this.number2;
				break;
			case "divide":
				this.result = this.number1 / this.number2;
				break;
			
		}
	}

}