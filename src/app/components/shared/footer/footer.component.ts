import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  private year: number;
  private fontawesome: any;

  constructor() {
    this.year = new Date().getFullYear();

    this.fontawesome = {
      github: faGithub,
      heart: faHeart
    };
  }

  ngOnInit() {

  }

}
