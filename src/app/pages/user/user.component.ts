import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import { User } from "../../shared/interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  form!: FormGroup;
  editMode = false;
  userInfo: User = {
    username: '',
    email: ''
  };

  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this._createForm();
    this.user.userInfo(1).subscribe(
        (data) => {this.userInfo = data}
    )
  }

  private _createForm() {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  editModeToggle(mode: boolean) {
    this.editMode = mode;
  }

  deleteUser() {
    this.user.signout();
    this.router.navigate(['/', 'auth'])
  }

  saveData() {
    const {username, email, password} = this.form.value;
    this.user.update(1, {username, email, password}).subscribe(
      () => {
        this.editModeToggle(false);
      }
    );
  }

}
