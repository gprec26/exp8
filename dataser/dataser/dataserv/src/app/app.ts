import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fetchdata } from './fetchdata';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  userList: any[] = [];

  constructor(private fetchService: Fetchdata) {}

  ngOnInit(): void {
    this.fetchService.getUser().subscribe({
      next: (users) => (this.userList = users),
      error: (err) => console.error('HTTP Error:', err)
    });
  }
}
