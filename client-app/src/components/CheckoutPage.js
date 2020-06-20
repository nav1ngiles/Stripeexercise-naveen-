import React, { Component } from 'react';
import {ElementsConsumer, CardElement} from '@stripe/react-stripe-js';
import "./CardSectionStyles.css"
import CardSection from './CardSection'


class CheckoutPage extends Component{
    constructor(props){
        super(props);
        //Object.assign({}, state, {score: 2});
        this.state = {apiResponse:"nothing", loaded:false, succeeded:"NotStarted", cardError:"None"}
        
    }

    callApi() {
        fetch("http://localhost:9000/secret")
        .then(res => res.text())
        .then(res => JSON.parse(res).clientSecret)
        .then(res => this.setState({apiResponse : res}))
        .catch(err => err);
    }

    componentDidMount() {
        this.callApi();
        this.setState({loaded : true})
    }

    handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();
    
        const {stripe, elements} = this.props
        const secret = this.state.apiResponse
    
        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make  sure to disable form submission until Stripe.js has loaded.
          return;
        }
    
        const result = await stripe.confirmCardPayment(secret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: 'Jenny Rosen',
            },
          }
        });
    
        if (result.error) {
          // Show error to your customer (e.g., insufficient funds)
          console.log(result.error.message);
          this.setState({succeeded:"failed"})
          this.setState({cardError:result.error.message})
        } else {
          this.setState({succeeded: result.paymentIntent.status})
          // The payment has been processed!
          if (result.paymentIntent.status === 'succeeded') {
            // Show a success message to your customer
            // There's a risk of the customer closing the window before callback
            // execution. Set up a webhook or plugin to listen for the
            // payment_intent.succeeded event that handles any business critical
            // post-payment actions.
           
          }
        }
      };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <div>CheckoutPage page test</div>
                    <CardSection />
                    <input type="submit" disabled={!this.state.loaded}></input>
                    <div>{this.state.apiResponse}</div>
                    <div>succeeded:{this.state.succeeded}</div>
                    <div>card error:{this.state.cardError}</div>
                </div>
            </form>
            
        )
        
    }
}
//export default CheckoutPage

export default function InjectedCheckoutPage() {
  return (
    <ElementsConsumer>
      {({stripe, elements}) => (
        <CheckoutPage  stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}