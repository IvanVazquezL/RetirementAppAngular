import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {
    public menu = [
        {
            title: 'Dashboard',
            icon: 'mdi mdi-gauge',
            submenu: [
                { title: 'Users', url: 'users' },
                { title: 'Nurses', url: 'nurses' },
                { title: 'Doctors', url: 'doctors' },
                { title: 'Residents', url: 'residents'},
                { title: 'Relatives', url: 'relatives'}
            ]
        }
    ];
}