import {Component, OnInit} from '@angular/core';
import {AuthMode} from "../../shared/types";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  authMode: AuthMode;
  constructor(
  ) {
    this.authMode = 'signin'
  }

  ngOnInit(): void {
  }

  authModeToggle(mode: AuthMode) {
    this.authMode = mode;
  }
}
