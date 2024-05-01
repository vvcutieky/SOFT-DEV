import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
toggleFavorite(_t26: any) {
throw new Error('Method not implemented.');
}
  filteredProducts: any[] = []; // Initialize the filteredProducts array
  products: any[] = [  // Sample product data (replace with your actual data)
    { name: "Hot Chocolate", category: "Hot Coffee", price: "₱80.00", image: "assets/hot choco.jpg", quantity: 0 },
    { name: "Cappucino", category: "Hot Coffee", price: "₱100.00", image: "assets/cappuci.jpg", quantity: 0 },
    { name: "Brewed Coffee", category: "Hot Coffee", price: "₱100.00", image: "assets/brewed coffee.jpg", quantity: 0 },

    { name: "Iced Americano", category: "Iced Coffee", price: "₱80.00", image: "assets/iced amer.jpg", quantity: 0 },
    { name: "Iced Mocha", category: "Iced Coffee", price: "₱100.00", image: "assets/iced mocha.jpg", quantity: 0 },
    { name: "Iced Macchiato", category: "Iced Coffee", price: "₱90.00", image: "assets/macchiato.jpg", quantity: 0 },

    { name: "Belgian Waffles", category: "Waffles", price: "₱50.00", image: "assets/belgian waffles.jpg", quantity: 0 },
    { name: "Bubble Waffle", category: "Waffles", price: "₱90.00", image: "assets/bubble waffle.jpg", quantity: 0 },
    { name: "Croffle", category: "Waffles", price: "₱60.00", image: "assets/croffle.jpg", quantity: 0 },

    { name: "Grilled and Ham Cheese", category: "Sandwich", price: "₱50.00", image: "assets/grilled ham n cheese.jpg", quantity: 0 },
    { name: "Chicken Sandwich", category: "Sandwich", price: "₱90.00", image: "assets/chicken sandwich.jpg", quantity: 0 },
    { name: "Club Sandwich", category: "Sandwich", price: "₱60.00", image: "assets/club sandwich.jpg", quantity: 0 },
  
    { name: "Mac 'n Cheese", category: "Pasta", price: "₱90.00", image: "assets/mac n cheese.jpg", quantity: 0 },
    { name: "Spaghetti", category: "Pasta", price: "₱60.00", image: "assets/spag.jpg", quantity: 0 },
    { name: "Lasagna", category: "Pasta", price: "₱90.00", image: "assets/lasgna.jpg", quantity: 0 },
  ];
selectedCategory: any;

  constructor() {
    this.filteredProducts = [...this.products]; // Initialize filteredProducts with all products
  }

  

  // Method to handle category change event
  categoryChanged(event: any) {
    const selectedCategory = event.detail.value; // Get the selected category from the event

    if (selectedCategory) {
      // Filter the products based on the selected category
      this.filteredProducts = this.products.filter(product => product.category === selectedCategory);
    } else {
      // If no category is selected, show all products
      this.filteredProducts = [...this.products];
    }
  }
  

  // Method to handle quantity increase
  increaseQuantity(product: any) {
    product.quantity++;
  }

  // Method to handle quantity decrease
  decreaseQuantity(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  // Method to handle adding product to cart
  addToCart(product: any) {
    // Implement your logic here
  }
}