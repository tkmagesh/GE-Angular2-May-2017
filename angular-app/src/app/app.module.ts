import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './helloWorld/helloWorld.component';
import { CalculatorComponent} from './calculator/calculator.component';
import { CalculatorResultComponent} from './calculator/calculatorResult.component';


import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/components/bugStats/bugStats.component';
import { BugEditComponent } from './bugTracker/components/bugEdit/bugEdit.component';

import { BugOperations } from './bugTracker/services/BugOperations.service';
import { BugStorage } from './bugTracker/services/BugStorage.service';
import { BugService } from './bugTracker/services/BugService.service';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CalculatorComponent,
    CalculatorResultComponent,
    BugTrackerComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilsModule
  ],
  providers: [BugOperations, BugStorage, BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
