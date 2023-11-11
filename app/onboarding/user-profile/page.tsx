"use client";

import Button from "@/components/button";
import Heading from "@/components/heading";
import TextInput from "@/components/text-input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

type Inputs = {
  storename: string;
  fullname: string;
  email: string;
  storeUrl: string;
};

export default function UserProfile() {
  const router = useRouter();

  const { values, isValid, handleChange, handleSubmit } = useFormik<Inputs>({
    initialValues: {
      storename: "",
      fullname: "",
      email: "",
      storeUrl: "",
    },
    validationSchema: Yup.object({
      storename: Yup.string().required("Store name is required"),
      fullname: Yup.string().required("Full name is required"),
      email: Yup.string().email("Provide a valid email address").required(),
      storeUrl: Yup.string().required("Store URL is required"),
    }),
    validateOnMount: true,
    onSubmit: () => {
      router.push("/onboarding/store-profile");
    },
  });

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
          id="storename"
          name="storename"
          type="text"
          label="Store Name"
          placeholder="The Coffee Factory"
          required
          value={values.storename}
          onChange={handleChange}
        />
        <TextInput
          id="fullname"
          name="fullname"
          type="text"
          label="Full Name"
          placeholder="John Doe"
          required
          value={values.fullname}
          onChange={handleChange}
        />
        <TextInput
          id="email"
          name="email"
          type="email"
          label="Email Address"
          placeholder="john@example.com"
          required
          value={values.email}
          onChange={handleChange}
        />
        <TextInput
          id="storeUrl"
          name="storeUrl"
          label="Store URL"
          placeholder="coffeefactory.myshopify.com"
          required
          value={values.storeUrl}
          onChange={handleChange}
        />
        <div className="mt-11 mb-2.5 lg:mt-7.5">
          <Button type="submit" disabled={!isValid}>
            Confirm
          </Button>
        </div>
      </form>
    </section>
  );
}
