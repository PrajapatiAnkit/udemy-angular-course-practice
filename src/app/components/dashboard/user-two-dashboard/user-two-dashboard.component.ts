import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';

@Component({
  selector: 'app-user-two-dashboard',
  templateUrl: './user-two-dashboard.component.html',
  styleUrls: ['./user-two-dashboard.component.css'],
})
export class UserTwoDashboardComponent
  implements OnInit, CanComponentDeactivate
{
  constructor() {}

  ngOnInit(): void {}
  canDeactivate() {
    return confirm('Are you leaving?');
  }
}
