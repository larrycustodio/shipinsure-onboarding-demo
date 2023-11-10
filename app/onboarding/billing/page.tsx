"use client";

import Heading from "@/components/heading";
import TextInput from "@/components/text-input";
import { FormEvent } from "react";
import Button from "@/components/button";
import Image from "next/image";

export default function StoreProfile() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section>
      <Heading
        heading="ShipInsure is free, here is how it works"
        subheading="In order to pay claims, ShipInsure refunds the customer directly or completes repurchases from your store. As our widget collects premiums from customers during checkout, your billing info is needed for ShipInsure to collect those premiums every month."
      />
      <form
        className="grid grid-cols-2 gap-x-3 gap-y-[5px] max-w-form-wrapper mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="col-span-2">
          <TextInput id="card-number" type="text" label="Card Number" />
        </div>
        <TextInput id="expiration" type="text" label="Expiration" required />
        <TextInput id="CVC" type="text" label="CVC" required />
        <TextInput id="country" type="text" label="Country" required />
        <TextInput id="zipcode" type="text" label="Zip Code" required />

        <div className="flex flex-col gap-5 col-span-2 mt-12.5 lg:mt-10">
          <Button type="submit">Next</Button>
          <div className="text-neutral-midnight-0 text-base">or</div>
          <Button type="button" variant="secondary">
            <Image
              className="mx-auto"
              src="/plaid-button-label.svg"
              alt="Plaid"
              width={92}
              height={33.6}
            />
          </Button>
        </div>
      </form>
    </section>
  );
}
