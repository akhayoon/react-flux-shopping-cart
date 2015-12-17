window.React = require('react');
var ProductData = require('./ProductData');
var CartAPI	= require('./utils/CartAPI');
var FluxCartApp = require('./components/FluxCartApp.react');

// Load Mock Product Data into localStorage
PoductData.init();

// Load Mock API Call
CartAPI.getProductData();

//Render FluxCartApp Controller View
React.render(
	<FluxCartApp />,
	document.getElementbyId('flux-cart')
);