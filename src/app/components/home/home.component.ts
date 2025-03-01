import { Component, AfterViewInit, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Módulos do Swiper
import 'swiper/css'; // CSS base do Swiper
import 'swiper/css/navigation'; // CSS das setas de navegação
import 'swiper/css/pagination'; // CSS da paginação
import 'swiper/css/autoplay'; // CSS do autoplay
import { EmailFormComponent } from '../email-form/email-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, BtnPrimaryComponent, EmailFormComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  selectedImage: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      new Swiper('.swiper', {
        modules: [Navigation, Pagination, Autoplay], // Módulos do Swiper
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000, // Tempo em milissegundos (3 segundos)
          disableOnInteraction: false, // Continua o autoplay após interação do usuário
        },
        slidesPerView: 1,
        spaceBetween: 30,
      });
    }
  }

  openModal(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}
