import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(
    private _route: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._userService.getCurrentUser(
      (user) => {
        if (!user) {
          this._route.navigateByUrl('/');
        }
      },
      console.log(this._userService.currentUser);
    );

  }

}
