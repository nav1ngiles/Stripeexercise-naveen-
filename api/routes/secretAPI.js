var express = require("express");
var router = express.Router();
//const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc', {apiVersion: ''});
const stripe = require('stripe')('sk_test_51GqYSRBlWofL9C8LEg8Wy02hgIMV0j28oHJ2yLs2rjaNSwnJ9dyKWrMD01xDypKa9M6BxUPgreQwRn5GPWNZAsuN00POeVvQP7', {apiVersion: ''});


router.get("/", async (req, res, next) => {
	const paymentIntent = await stripe.paymentIntents.create({
	  amount: 51.00,
	  currency: 'usd',
	  // Verify your integration in this guide by including this parameter
	  metadata: {integration_check: 'accept_a_payment'},
	});
	res.send({
		clientSecret: paymentIntent.client_secret
	});
    //res.send("secret API is working properly");
});

module.exports = router;