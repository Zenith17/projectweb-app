import { Component, HostListener, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [FooterComponent, ContactoComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements OnInit {

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
