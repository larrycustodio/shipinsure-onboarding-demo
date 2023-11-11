"use client";

import Button from "@/components/button";
import Heading from "@/components/heading";
import TextInput from "@/components/text-input";
import { FormEvent } from "react";

export default function UserProfile() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section>
      <Heading
        heading="Welcome!"
        subheading="Let's make this easy--Please verify the information below is correct."
      />
      <form
        className="flex flex-col gap-2.5 max-w-form-wrapper mx-auto"
        onSubmit={handleSubmit}
      >
        <TextInput
          id="store-name"
          type="text"
          label="Store Name"
          placeholder="The Coffee Factory"
          required
        />
        <TextInput
          id="full-name"
          type="text"
          label="Full Name"
          placeholder="John Doe"
          required
        />
        <TextInput
          id="email"
          type="email"
          label="Email Address"
          placeholder="john@example.com"
          required
        />
        <TextInput
          id="store-url"
          label="Store URL"
          placeholder="coffeefactory.myshopify.com"
          required
        />
        <div className="mt-11 mb-2.5 lg:mt-7.5">
          <Button type="submit">Confirm</Button>
        </div>
      </form>
    </section>
  );
}
