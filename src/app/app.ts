import { NgClass, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChevronRight, LucideAngularModule, Menu, MoveRight,Instagram,Youtube,Facebook,Linkedin,Twitter } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('vivaquest');
  readonly menu = Menu;
  readonly right = MoveRight;
  readonly check = ChevronRight;
  readonly Instagram=Instagram ;
  readonly youtube=Youtube  ;
  readonly Facebook=Facebook ;
  readonly Linkedin =Linkedin ;
  readonly Twitter =Twitter ;
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.fade-in')
      .forEach(el => observer.observe(el));
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // slides = [
  //   { id: 1, text: 'Slide One', bg: 'bg-indigo-200' },
  //   { id: 2, text: 'Slide Two', bg: 'bg-blue-200' },
  //   { id: 3, text: 'Slide Three', bg: 'bg-pink-200' }
  // ];

  // index = 0;
  // intervalId: any;

  // ngOnInit() {
  //   this.startAutoSlide();
  // }

  // ngOnDestroy() {
  //   clearInterval(this.intervalId);
  // }

  // startAutoSlide() {
  //   this.intervalId = setInterval(() => {
  //     this.next();
  //   }, 3000);
  // }

  // next() {
  //   this.index = (this.index + 1) % this.slides.length;
  // }

  // prev() {
  //   this.index = (this.index - 1 + this.slides.length) % this.slides.length;
  // }

  // goTo(i: number) {
  //   this.index = i;
  // }
}
