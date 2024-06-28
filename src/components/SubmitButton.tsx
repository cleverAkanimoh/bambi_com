"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({
  text = "Submit",
  submitText = "submitting",
}: {
  text?: string;
  submitText?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      aria-disabled={pending}
      type="submit"
      className={`self-start text-white w-full md:w-[40%] lg:w-[30%] text-center font-bold bg-black p-4 hover:bg-primary hover:text-white transition-all ease-in-out duration-200 disabled:opacity-60 disabled:pointer-events-none`}
    >
      {pending ? submitText : text}
    </button>
  );
}
