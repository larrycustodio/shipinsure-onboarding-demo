"use client";

import Button from "@/components/button";
import Heading from "@/components/heading";
import { RadioGroup, RadioInput } from "@/components/Radio";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

type Inputs = {
  "orders-count": string;
};

export default function StoreProfile() {
  const router = useRouter();

  const { values, isValid, handleChange, handleSubmit } = useFormik<Inputs>({
    initialValues: {
      "orders-count": "",
    },
    validationSchema: Yup.object({
      "orders-count": Yup.string().required("Select one of the options"),
    }),
    validateOnMount: true,
    onSubmit: () => {
      router.push("/onboarding/billing");
    },
  });

  return (
    <section>
      <Heading
        heading="Tell us a bit about your store"
        subheading="We’d love to hear more about your Shopify experience. On average, how many orders do you typically receive each month?"
      />
      <form onSubmit={handleSubmit} className="max-w-form-wrapper mx-auto">
        <RadioGroup id="orders-counts" label="Estimated Number of orders">
          {[
            {
              id: "orders-option-0",
              value: "1-500",
              label: "1 - 500",
            },
            {
              id: "orders-option-1",
              value: "500-1000",
              label: "500 - 1,000",
            },
            {
              id: "orders-option-2",
              value: "1000-10000",
              label: "1,000 - 10,000",
            },
            {
              id: "orders-option-3",
              value: "10000-50000",
              label: "10,000 - 50,000",
            },
            {
              id: "orders-option-4",
              value: "50000+",
              label: "50,000+",
            },
          ].map(({ id, value, label }) => (
            <RadioInput
              name="orders-count"
              key={id}
              id={id}
              value={value}
              checked={values["orders-count"] === value}
              label={label}
              onChange={handleChange}
            />
          ))}
        </RadioGroup>
        <div className="mt-30 lg:mt-12.5">
          <Button type="submit" disabled={!isValid}>
            Confirm
          </Button>
        </div>
      </form>
    </section>
  );
}
