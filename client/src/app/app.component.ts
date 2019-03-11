import { Component } from '@angular/core';
export interface Doctors {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  likari: Doctors[] = [
    {value: 'terapevt-0', viewValue: 'Terapevt'},
    {value: 'stomatolog-1', viewValue: 'Stomatolog'},
    {value: 'fake-doctor-2', viewValue: 'FakeDoctor'},
    {value: 'pediatr-3', viewValue: 'Pediatr'},
    {value: 'kardiolog-4', viewValue: 'Kardiolog'}
  ];
}

