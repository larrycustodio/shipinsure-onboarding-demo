"use client";

import Button from "@/components/button";
import Heading from "@/components/heading";
import { RadioGroup, RadioInput } from "@/components/Radio";
import { ChangeEvent, useState } from "react";

export default function StoreProfile() {
  const [selectedOption, setSelectedOption] = useState<string>();

  const changeOption = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <section>
      <Heading
        heading="Tell us a bit about your store"
        subheading="We’d love to hear more about your Shopify experience. On average, how many orders do you typically receive each month?"
      />
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
            name="ord ers-count"
            key={id}
            id={id}
            value={value}
            checked={selectedOption === value}
            label={label}
            onChange={changeOption}
          />
        ))}
      </RadioGroup>
      <div className="mt-12.5 lg:mt-10">
        <Button type="submit">Confirm</Button>
      </div>
    </section>
  );
}
