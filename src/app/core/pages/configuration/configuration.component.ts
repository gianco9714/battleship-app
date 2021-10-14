import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  gameConfig: FormGroup;
  easyModeTurns: any;
  normalModeTurns: any;
  hardModeTurns: any;
  constructor(fb: FormBuilder, private snackBar: MatSnackBar) {
    this.gameConfig = fb.group({
      numberOfTurns: [''],
      numberOfTurnsDefault: ['']
    });
  }

  ngOnInit(): void {
    // Check infinite 1.7976931348623157e+308
    this.easyModeTurns = Number.POSITIVE_INFINITY;
    this.normalModeTurns = 50;
    this.hardModeTurns = 100;
  }

  // tslint:disable-next-line:typedef
  submit(){
    if (this.gameConfig.value.numberOfTurns){
      localStorage.setItem('numberOfTurns', String(Math.abs(Math.round(this.gameConfig.value.numberOfTurns))));
      this.showSnackbar();
    } else {
      localStorage.setItem('numberOfTurns', this.gameConfig.value.numberOfTurnsDefault);
      this.showSnackbar();
    }
    this.gameConfig.reset();
  }

  // tslint:disable-next-line:typedef
  showSnackbar() {
    this.snackBar.open('Saved', '', {
      duration: 2000,
      panelClass: ['snackbar-style']
    });
  }

}
