import React, { FormEvent, useRef, useState } from "react";
import { useColor } from "../../context/colorProvider";
import { LinkBtn } from "../common/linkBtn";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const { colors, isMobile } = useColor();
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [formFields, setFormFields] = useState({
    name: { value: "", hasError: false },
    email: { value: "", hasError: false },
    message: { value: "", hasError: false },
  });

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    // Validate form fields
    const hasEmptyFields = Object.values(formFields).some(
      (field) => field.value.trim() === ""
    );
    const hasInvalidEmail =
      formFields.email.value.trim() !== "" &&
      !formFields.email.value.includes("@");

    if (hasEmptyFields || hasInvalidEmail) {
      setFormFields((prevFields) => ({
        name: {
          value: prevFields.name.value,
          hasError: prevFields.name.value.trim() === "",
        },
        email: {
          value: prevFields.email.value,
          hasError:
            prevFields.email.value.trim() === "" ||
            !prevFields.email.value.includes("@"),
        },
        message: {
          value: prevFields.message.value,
          hasError: prevFields.message.value.trim() === "",
        },
      }));
      setFormState("idle");
      return;
    }

    if (formRef.current) {
      try {
        await emailjs.sendForm(
          "service_nmabt4e",
          "template_2qnrqxm",
          formRef.current,
          "mkXxfeOZPT5A15D7Y"
        );
        setFormState("success");
        setTimeout(() => setFormState("idle"), 3000); // Reset form after 3 seconds
      } catch (error) {
        console.error("FAILED...", error);
        setFormState("error");
        setTimeout(() => setFormState("idle"), 3000); // Reset form after 3 seconds
      }
    }
  };

  if (formState === "loading") {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="loader"></div>
      </div>
    );
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-4xl mb-4">✅</div>
        <p className="text-xl font-semibold">Message sent successfully!</p>
        <p>I will contact you over mail ASAP</p>
      </div>
    );
  }

  if (formState === "error") {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-4xl mb-4">❌</div>
        <p className="text-xl font-semibold">
          Looks like an error occurred while sending your message.
        </p>
        <p>Please Try Again</p>
      </div>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: "name" | "email" | "message"
  ) => {
    setFormFields((prevFields) => ({
      ...prevFields,
      [field]: {
        value: e.target.value,
        hasError: false, // Reset error state when user starts typing
      },
    }));
  };

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-10 md:gap-[100px] md:flex-row"
      onSubmit={handleSubmitForm}
    >
      <div className="flex flex-col gap-4 ">
        {/* Form input for name */}
        <div className="flex flex-col gap-5 md:flex-row">
          <label
            htmlFor="name"
            className="flex items-center justify-start md:w-[250px] font-semibold text-xl roboto md:justify-end"
          >
            Name
          </label>
          <div
            className="border-2 flex items-center justify-center p-2"
            style={{
              borderColor: formFields.name.hasError
                ? colors.error
                : colors.primary,
            }}
          >
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-[350px] h-[40px] outline-none p-2 font-semibold md:w-[700px]"
              style={{
                backgroundColor: colors.primary,
                color: colors.secondary,
              }}
              value={formFields.name.value}
              onChange={(e) => handleInputChange(e, "name")}
            />
          </div>
        </div>

        {/* Form input for email-id */}
        <div className="flex flex-col gap-5 md:flex-row ">
          <label
            htmlFor="email"
            className="flex items-center justify-start md:w-[250px] font-semibold text-xl roboto md:justify-end"
          >
            Email-Id
          </label>
          <div
            className="border-2 flex items-center justify-center p-2"
            style={{
              borderColor: formFields.email.hasError
                ? colors.error
                : colors.primary,
            }}
          >
            <input
              id="email"
              name="email"
              type="email"
              placeholder="JohnDoe@gmail.com"
              className="w-[350px] h-[40px] outline-none p-2 font-semibold md:w-[700px]"
              style={{
                backgroundColor: colors.primary,
                color: colors.secondary,
              }}
              value={formFields.email.value}
              onChange={(e) => handleInputChange(e, "email")}
            />
          </div>
        </div>

        {/* Form input for description*/}
        <div className="flex flex-col gap-5 md:flex-row">
          <label
            htmlFor="message"
            className="flex items-center justify-start md:w-[250px] font-semibold text-xl roboto md:justify-end"
          >
            What we Talking About
          </label>
          <div
            className="w-fit border-2 flex items-center justify-center p-2 font-semibold"
            style={{
              borderColor: formFields.message.hasError
                ? colors.error
                : colors.primary,
            }}
          >
            <textarea
              id="message"
              name="message"
              className="resize-none w-[350px] h-[100px] outline-none p-2 md:w-[700px]"
              placeholder={
                isMobile
                  ? "Hey, we're designing a system for [Company X] and would love to get your input. Can you hop on a call to discuss?"
                  : "We're looking to design a system for [Company X], and we believe your expertise would be invaluable to the process. We'd love to set up a time for a discussion and get your thoughts on how we can make this a success."
              }
              style={{
                backgroundColor: colors.primary,
                color: colors.secondary,
              }}
              value={formFields.message.value}
              onChange={(e) => handleInputChange(e, "message")}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/* Send Btn */}
        <LinkBtn
          placeholder="Send"
          src="arrow-right2_light"
          color="cream"
          type="submit"
        />
      </div>
    </form>
  );
};
