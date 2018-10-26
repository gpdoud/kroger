import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cv-experience',
  templateUrl: './my-cv-experience.component.html',
  styleUrls: ['./my-cv-experience.component.css']
})
export class MyCvExperienceComponent implements OnInit {

  jobs = [
    { company: 'MAX', role: 'Instructor', start: '2017', end: 'Present' },
    { company: 'TIY', role: 'Instructor', start: '2016', end: '2017' },
    { company: 'PE', role: 'Lead Developer', start: '2016', end: '2016' },
    { company: 'SD', role: 'Softwar Developer', start: '1984', end: '2016' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
