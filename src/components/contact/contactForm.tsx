import { FormEvent } from "react";
import { useColor } from "../../context/colorProvider";
import { LinkBtn } from "../common/linkBtn";

export const ContactForm = () => {
  const { colors, isMobile } = useColor();

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      method="POST"
      target="_blank"
      className="flex flex-col gap-10 md:gap-[100px] md:flex-row"
      onSubmit={() => handleSubmitForm}
    >
      <div className="flex flex-col gap-4 ">
        {/* Form input for name */}
        <div className="flex flex-col gap-5 md:flex-row">
          <label
            htmlFor=""
            className="flex items-center justify-start md:w-[250px] font-semibold text-xl roboto md:justify-end"
          >
            Name
          </label>
          <div
            className="border-2 flex items-center justify-center p-2"
            style={{ borderColor: colors.primary }}
          >
            <input
              type="text"
              placeholder="John Doe"
              className="w-[350px] h-[40px] outline-none p-2 font-semibold md:w-[700px]"
              style={{
                backgroundColor: colors.primary,
                color: colors.secondary,
              }}
              required
            />
          </div>
        </div>

        {/* Form input for email-id */}
        <div className="flex flex-col gap-5 md:flex-row ">
          <label
            htmlFor=""
            className="flex items-center justify-start md:w-[250px] font-semibold text-xl roboto md:justify-end"
          >
            Email-Id
          </label>
          <div
            className="border-2 flex items-center justify-center p-2"
            style={{ borderColor: colors.primary }}
          >
            <input
              type="email"
              placeholder="JohnDoe@gmail.com"
              className="w-[350px] h-[40px] outline-none p-2 font-semibold md:w-[700px]"
              style={{
                backgroundColor: colors.primary,
                color: colors.secondary,
              }}
              required
            />
          </div>
        </div>

        {/* Form input for description*/}
        <div className="flex flex-col gap-5 md:flex-row">
          <label
            htmlFor=""
            className="flex items-center justify-start md:w-[250px] font-semibold text-xl roboto md:justify-end"
          >
            What we Talking About
          </label>
          <div
            className="w-fit border-2 flex items-center justify-center p-2 font-semibold"
            style={{ borderColor: colors.primary }}
          >
            <textarea
              className="resize-none w-[350px] h-[100px] outline-none p-2 md:w-[700px]"
              placeholder={
                isMobile
                  ? "Hey, we’re designing a system for [Company X] and would love to get your input. Can you hop on a call to discuss?"
                  : "We’re looking to design a system for [Company X], and we believe your expertise would be invaluable to the process. We’d love to set up a time for a discussion and get your thoughts on how we can make this a success."
              }
              style={{
                backgroundColor: colors.primary,
                color: colors.secondary,
              }}
              required
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
