import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private user: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._createFrom();
  }

  private _createFrom() {
   this.form = this.fb.group({
     username: ['User name', [Validators.required, Validators.minLength(2)]],
     password: [null, [Validators.required, Validators.minLength(6)]]
   })
  }

  signin() {
    const {username, password} = this.form.value
    this.user.signin({username: 'mor_2314', password: '83r5^_'})
      .subscribe(
        () => {
          this.user.authenticated = true;
          this.router.navigate(['/', 'store'])
        }
      )
  }

}
