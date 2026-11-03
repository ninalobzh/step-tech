import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
