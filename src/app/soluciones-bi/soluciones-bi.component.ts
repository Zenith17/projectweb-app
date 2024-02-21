import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-soluciones-bi',
  standalone: true,
  imports: [],
  templateUrl: './soluciones-bi.component.html',
  styleUrl: './soluciones-bi.component.css'
})
export class SolucionesBIComponent implements OnInit {

  ngOnInit() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {

    jQuery(document).ready(function () {
      jQuery(window).on('scroll', function () {
          if (jQuery(window).scrollTop()) {
              jQuery("header").addClass("bgc");
              jQuery("#logo_nav").attr("src","./assets/logo-digito-azul.svg");
          } else {
              jQuery("header").removeClass("bgc");
              jQuery("#logo_nav").attr("src","./assets/logo-digito-blanco.svg");
          }
      });
    });

  }


}
