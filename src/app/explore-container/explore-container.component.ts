import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() code : string;
  @Input() message : string;

  constructor(private router: Router) { }

  ngOnInit() {}

  goTo(goto) {
    this.router.navigate(goto)
  }

}