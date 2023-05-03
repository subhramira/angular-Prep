import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SubComponent } from './subjectbehavioursub/sub.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SubComponent],
  template: `
    <app-sub></app-sub>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
