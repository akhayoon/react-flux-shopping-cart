module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Potatoe Bags',
        image: 'http://www.macgasm.net/wp-content/uploads/2011/11/sack-of-potatoes.jpg',
        description: 'The finest potatoes from P.E.I',
        variants: [
          {
            sku: '123123',
            type: '2 lbs',
            price: 4.99,
            inventory: 1

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