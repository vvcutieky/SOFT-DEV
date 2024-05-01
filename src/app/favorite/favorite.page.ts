import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { IonSegmentCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
categoryChanged($event: IonSegmentCustomEvent<SegmentChangeEventDetail>) {
throw new Error('Method not implemented.');
}
toggleFavorite(_t26: any) {
throw new Error('Method not implemented.');
}
      favorite = 'favorite'
      menu = 'favoriteMenu'
selectedCategory: any;
products: any;
filteredProducts: any;
  constructor() { }

  ngOnInit() {
  }

}
