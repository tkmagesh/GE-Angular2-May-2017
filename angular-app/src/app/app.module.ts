import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './helloWorld/helloWorld.component';
import { CalculatorComponent} from './calculator/calculator.component';
import { CalculatorResultComponent} from './calculator/calculatorResult.component';


import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugService } from './bugTracker/services/BugService';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CalculatorComponent,
    CalculatorResultComponent,
    BugTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
