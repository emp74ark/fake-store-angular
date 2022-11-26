import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output() onSignUp = new EventEmitter<string>();

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private user: UserService,
  ) { }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm() {
    this.form = this.fb.group({
      username: ['User name', [Validators.required, Validators.minLength(2)]],
      email: ['user@ma.il', [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  signup() {
    const {username, email, password} = this.form.value;
    this.user.signup({username, email, password})
      .subscribe(
        () => {
          // todo: save token and add interceptor;
          this.onSignUp.emit();
        }
      );
  }
}
