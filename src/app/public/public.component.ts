import { Component } from '@angular/core';

@Component({
  selector: 'public',
  template: `
    <h2>Public</h2>
    <router-outlet></router-outlet>
  `,
})
export class PublicComponent  { 
}
