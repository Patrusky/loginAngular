import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

// eslint-disable-next-line @angular-eslint/component-selector
@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  currentUser!: User;
  title: any;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
