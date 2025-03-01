import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { NgOptimizedImage, CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules'; // Adicione o módulo EffectCreative
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative'; // Adicione o CSS do efeito criativo
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
        modules: [Navigation, Pagination, Autoplay, EffectCreative], // Adicione o módulo EffectCreative
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
          delay: 3000,
          disableOnInteraction: false,
        },
        effect: 'creative', // Habilita o efeito criativo
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1], // Desliza para a esquerda
          },
          next: {
            translate: ['100%', 0, 0], // Desliza para a direita
          },
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
