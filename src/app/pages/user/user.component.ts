import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  form!: FormGroup;
  editMode = false;

  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._createForm();
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
