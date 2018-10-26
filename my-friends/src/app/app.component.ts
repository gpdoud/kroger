import { Component, OnInit } from '@angular/core';
import { FriendService } from './friend.service';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  friends: Friend[];

  constructor(private friend: FriendService) {}

  ngOnInit() {
    this.friends = this.friend.getFriends();
  }
}
