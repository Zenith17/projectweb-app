import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import * as $ from 'jquery';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SlickCarouselModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit { 
  title = 'projectweb-app';

  multiSlideConfig = {
    slidesToShow: 5,
    slidesToScroll: 3,
    infinite: true,
  }

  multiSlideImages = [
    {img: "./assets/kfc_logo.jpg"},
    {img: "./assets/kfc_logo.jpg"},
    {img: "./assets/kfc_logo.jpg"},
    {img: "./assets/kfc_logo.jpg"},
    {img: "./assets/kfc_logo.jpg"},
    {img: "./assets/kfc_logo.jpg"},
    {img: "./assets/pizzahut_logo.png"},
    {img: "./assets/pizzahut_logo.png"}
  ]

  constructor() { }

  ngOnInit(): void {
    
  }
}
