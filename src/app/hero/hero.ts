import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  title = 'Discover the Future';
  highlight = 'Technology';
  description =
    'Shop the latest smartphones, laptops, and cutting-edge electronics from top brands. Free shipping on orders over $100.';

  chips = [
    { label: 'Smartphones', position: 'top' },
    { label: 'Laptops', position: 'right' },
    { label: 'Audio', position: 'bottom' },
  ];
}
