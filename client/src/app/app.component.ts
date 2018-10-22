import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _route: Router,
    private _userService: UserService
  ){}

  ngOnInit() {
    this._userService.getCurrentUser(
      (user) => {
        if (!user) {
          this._route.navigateByUrl('/');
        }
      },
      console.log
    );
  }

}
