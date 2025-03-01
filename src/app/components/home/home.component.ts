import { Component, AfterViewInit, Inject, HostListener } from '@angular/core';
import { NgOptimizedImage, CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Adicionado Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Adicionado CSS do Autoplay
import { EmailFormComponent } from '../email-form/email-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, CommonModule, BtnPrimaryComponent, EmailFormComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  selectedImage: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      new Swiper('.swiper', {
        modules: [Navigation, Pagination, Autoplay], // Adicionado Autoplay
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
