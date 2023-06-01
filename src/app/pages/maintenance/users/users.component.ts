import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styles: [
    ]
})

export class UsersComponent {

    users: User[] = [];
    total: number = 0;

    constructor(private userService: UserService) {
        this.userService.getUsers()
            .subscribe( ({total, users}) => {
                this.users = users;
                this.total = total
            });
    }
}