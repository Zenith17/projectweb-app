import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { RouterOutlet } from '@angular/router';
import * as $ from 'jquery';
import { NavbarComponent } from '../navbar/navbar.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AppComponent, RouterOutlet, NavbarComponent, SlickCarouselModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

    multiSlideConfig = {
    slidesToShow: 5,
    swipeToSlide: true,
    infinite: true,
  }

multiSlideImages = [
  {img: "./assets/c-logo-pizza-hut.webp"},
  {img: "./assets/ieduca.webp"},
  {img: "./assets/logo2-ATSA.webp"},
  {img: "./assets/mibanco.webp"},
  {img: "./assets/c-logo-marca-lima.webp"},
  {img: "./assets/c-logo-kfc.webp"},
  {img: "./assets/c-logo-idecopi.webp"}
]

  constructor() { }

  ngOnInit(): void {
    
  }
}
