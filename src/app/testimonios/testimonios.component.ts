import { Component, HostListener, OnInit } from '@angular/core';
import { ContactoComponent } from '../contacto/contacto.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [ContactoComponent, FooterComponent],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})
export class TestimoniosComponent implements OnInit{

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
