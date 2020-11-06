import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides = [{image: "../../../assets/svg/6301.jpg"},{image:"../../../assets/svg/6460.jpg"},{image:"../../../assets/svg/8294.jpg"}]
  constructor() { }

  ngOnInit(): void {
  }

}
