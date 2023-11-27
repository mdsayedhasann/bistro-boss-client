import React from "react";
import SectionHeading from "../../../components/SectionHeading";
import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js'
import CheckoutOutForm from "./CheckoutOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GAATEWAY);
// const stripePromise = loadStripe('pk_test_EfOy0lGteCaemQr0SkjLbY9300qm2nDkPN');
const Payment = () => {
  return (
    <div>
      <Helmet></Helmet>
      <SectionHeading
        heading={"Payment"}
        subheading={"Please Pay, We are hungry"}
      ></SectionHeading>

      <Elements stripe={stripePromise}>
        <CheckoutOutForm />
      </Elements>
    </div>
  );
};

export default Payment;
