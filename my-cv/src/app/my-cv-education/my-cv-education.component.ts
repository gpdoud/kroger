import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cv-education',
  templateUrl: './my-cv-education.component.html',
  styleUrls: ['./my-cv-education.component.css']
})
export class MyCvEducationComponent implements OnInit {

  schools = [
    { school: 'UC', degree: 'BS', major: 'IPS' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
