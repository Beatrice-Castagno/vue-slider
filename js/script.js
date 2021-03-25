var app = new Vue(
 {
 el: '#root',
 data: {
 images: [
   "img/Alfa-Romeo-Giulia-GTAm.jpg",
   "img/aston-martin-v8-vantage-1977.jpg",
   "img/chevrolet-camaro.jpg"
  ],
  imagesIndex: 0,
 },

 methods: {
   frecciaNext: function() {
     this.imagesIndex++;

     if (this.imagesIndex == this.images.length) {
       this.imagesIndex = 0;
     }
   },

   frecciaPrev: function() {
     this.imagesIndex--;

     if (this.imagesIndex < 0) {
       this.imagesIndex = this.images.length - 1;
     }
   }
 }
}
);
