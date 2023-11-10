"use client";

import { redirect } from "next/navigation";

export default function OnboardingIndex() {
  // TODO: reconcile with state of onboarding
  redirect("/onboarding/user-profile");
}
