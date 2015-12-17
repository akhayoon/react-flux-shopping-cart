module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Potatoe Bags',
        image: 'sack-of-potatoes.jpg',
        description: 'The finest potatoes from P.E.I',
        variants: [
          {
            sku: '123123',
            type: '2 lbs',
            price: 4.99,
            inventory: 10

          },
          {
            sku: '123124',
            type: '4 lbs',
            price: 12.99,
            inventory: 5
          },
          {
            sku: '1231235',
            type: '10 lbs',
            price: 19.99,
            inventory: 3
          }
        ]
      }
    ]));
  }

};