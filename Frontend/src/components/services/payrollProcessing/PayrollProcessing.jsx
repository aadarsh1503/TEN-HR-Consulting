import React from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import Cart2 from "./Cart2";
import Pricing from "./Pricing";
import Resources from "./Resources";

function PayrollProcessing() {
  return (
    <>
      {/* Banner Components */}

      <section>
        <Banner />
      </section>

      {/* cart components */}

      <section>
        <Cart />
      </section>

      {/* Cart2 components */}

      <section>
        <Cart2 />
      </section>

      {/* Pricing components */}

      <section>
        <Pricing />
      </section>

      {/* Contact components */}

      {/* Resources components */}

      <section>
        <Resources />
      </section>
    </>
  );
}

export default PayrollProcessing;
