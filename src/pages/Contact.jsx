import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log("successful message");
        form.current.reset();
      },
      (error) => {
        console.log("the message could not be sent", error);
      }
    );
  };
  return (
    <div
      id="contact"
      className="w-[100%] h-auto bg-white flex flex-col gap-10 pt-[10em]"
    >
      <div className="mx-[100px]">
        <h3 className="text-black text-[2em]">Contact Page</h3>
      </div>
      <div className="">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-y-4 mx-[100px]"
        >
          <label className="text-[1.5em]">Get In Touch</label>
          <div className="w-[100%] gap-4 flex flex-col sm:flex-row">
            <input
              type="text"
              name="from_name"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 hover:shadow-md"
              placeholder="Name"
            />
            <input
              type="text"
              name="from_email"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 hover:shadow-md"
              placeholder="Email"
            />
          </div>
          <textarea
            rows={5}
            type="text"
            name="message"
            className="border border-gray-300 rounded-md px-4 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 hover:shadow-md"
            placeholder="Tell me about your needs..."
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
