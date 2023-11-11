"use client";

import Heading from "@/components/heading";
import TextInput from "@/components/text-input";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

type Inputs = {
  "card-number": string;
  expiration: string;
  cvc: string;
  country: string;
  zipcode: string;
};

export default function StoreProfile() {
  const router = useRouter();

  const { values, isValid, handleChange, handleSubmit } = useFormik<Inputs>({
    initialValues: {
      "card-number": "",
      expiration: "",
      cvc: "",
      country: "",
      zipcode: "",
    },
    validationSchema: Yup.object({
      "card-number": Yup.string().required("Card number is required"),
      expiration: Yup.string().required("Expiration is required"),
      cvc: Yup.string().required("CVC is required"),
      country: Yup.string().required("Country is required"),
      zipcode: Yup.string().required("Zip code is required"),
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
          <TextInput
            id="card-number"
            name="card-number"
            type="text"
            label="Card Number"
            placeholder="1111 2222 3333 4444"
            value={values["card-number"]}
            onChange={handleChange}
          />
        </div>
        <TextInput
          id="expiration"
          name="expiration"
          type="text"
          label="Expiration"
          placeholder="MM/YY"
          required
          value={values.expiration}
          onChange={handleChange}
        />
        <TextInput
          id="cvc"
          name="cvc"
          type="text"
          label="CVC"
          placeholder="123"
          required
          value={values.cvc}
          onChange={handleChange}
        />
        <TextInput
          id="country"
          name="country"
          type="text"
          label="Country"
          placeholder="USA"
          required
          value={values.country}
          onChange={handleChange}
        />
        <TextInput
          id="zipcode"
          name="zipcode"
          type="text"
          label="Zip Code"
          placeholder="12345"
          required
          value={values.zipcode}
          onChange={handleChange}
        />

        <div className="flex flex-col gap-5 col-span-2 mt-10 lg:mt-5">
          <Button type="submit" disabled={!isValid}>
            Next
          </Button>
          <div className="text-neutral-midnight-0 text-xl leading-[27px]">
            or
          </div>
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
      <div className="mt-7.5 hidden lg:block lg:mt-6">
        <Link className="text-base underline " href="/onboarding/store-profile">
          Go Back
        </Link>
      </div>
    </section>
  );
}
