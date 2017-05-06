import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './helloWorld/helloWorld.component';
import { CalculatorComponent} from './calculator/calculator.component';
import { CalculatorResultComponent} from './calculator/calculatorResult.component';


import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugOperations } from './bugTracker/services/BugOperations.service';
import { BugStorage } from './bugTracker/services/BugStorage.service';

import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { ElapsedPipe } from './bugTracker/pipes/elapsed.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CalculatorComponent,
    CalculatorResultComponent,
    BugTrackerComponent,
    TrimTextPipe,
    ElapsedPipe,
    SortPipe,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BugOperations, BugStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
