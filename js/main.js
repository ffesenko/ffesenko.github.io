new Vue({
    el: "#app",
    data: {
      products: [
        { id: 1, title: "Amsterdam Forcing", short_text: "Early variety with a sweet, tender taste.", image: "carrot/Carrot1.jpg", desc: "Perfect for fresh consumption and salads.", pdf_link: "carrot/Carrot1.pdf" },
        { id: 2, title: "Autumn King", short_text: "Late variety with high yield.", image: "carrot/Carrot2.jpg", desc: "Ideal for storage and winter use.", pdf_link: "carrot/Carrot2.pdf" },
        { id: 3, title: "Bangor", short_text: "Stable hybrid with strong growth.", image: "carrot/Carrot3.jpg", desc: "Great for juice and processing.", pdf_link: "carrot/Carrot3.pdf" },
        { id: 4, title: "Berlicum", short_text: "Classic Dutch variety.", image: "carrot/Carrot4.jpg", desc: "Long, uniform roots with excellent taste.", pdf_link: "carrot/Carrot4.pdf" },
        { id: 5, title: "Bolero", short_text: "Resistant to diseases and cracking.", image: "carrot/Carrot5.jpg", desc: "Perfect for open-field cultivation and long storage.", pdf_link: "carrot/Carrot5.pdf" }
      ],
      product: {},
      btnVisible: 0
    },
    methods: {
      getProduct: function() {
        const productId = window.location.hash.substring(1);
        if (productId) {
          this.product = this.products.find(p => p.id == productId);
          this.checkInCart();
        }
      },

      addToCart: function(id) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (!cart.includes(id)) {
          cart.push(id); 
          localStorage.setItem('cart', JSON.stringify(cart)); 
          this.btnVisible = 1;
        }
      },
  
      checkInCart: function() {
        let cart = JSON.parse(localStorage.getItem('cart')) || []; 
        if (cart.includes(this.product.id)) {
          this.btnVisible = 1; 
        }
      }
    },
    mounted: function() {
      this.getProduct();
    }
  });
  