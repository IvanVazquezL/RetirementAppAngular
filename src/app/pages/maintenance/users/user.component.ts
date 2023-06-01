import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent {
  public userForm: FormGroup;
  selectedUser:any ;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {

    this.activatedRoute.params
    .subscribe( ({ id }) => this.fillForm(id) );

    this.userForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      role: ['', Validators.required ],
    });
  }

  fillForm(id: string) {
    if ( id === 'new' ) {
      return;
    }

    this.userService.getUserById(id)
      .subscribe(user => {
        this.selectedUser = user;
        this.userForm.setValue({ email: user.email, password:'', role: user.role });
    });
  }

  saveUser() {
    if (this.selectedUser) {
      console.log('0')
    } else {
      console.log(this.userForm.value)
      this.userService.createUser(this.userForm.value)
        .subscribe()
    }
  }
}
