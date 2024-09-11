import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

import "../css/stylepayment.css";
export default function Success() {



    return (
    <div className="stylepayment">
        Payment Success
    </div>
    );
}