import { Component } from '@angular/core';

@Component({
	selector : 'hello-world',
	//template : '<h3>{{message}}</h3>'
	templateUrl : 'helloWorld.template.html'
})
export class HelloWorldComponent{
	message : string = 'Welcome to Angular!!';
	name : string = '';

	onGreetClick(){
		this.message = 'Hello ' + this.name + ', Welcome to Angular!!';
	}
}