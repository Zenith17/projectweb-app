import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  ngOnInit() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {

    jQuery(document).ready(function () {
      jQuery(window).on('scroll', function () {
          if (jQuery(window).scrollTop()) {
              jQuery("header").addClass("bgc");
              jQuery("#logo_nav").attr("src","./assets/logo-negro-PNG.png");
          } else {
              jQuery("header").removeClass("bgc");
              jQuery("#logo_nav").attr("src","./assets/logo-blanco-PNG.png");
          }
      });
    });

  }

}