'use client';
import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const form = useRef();
    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID;
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_USER_ID;

    const sendEmail = (e) => {
    e.preventDefault();
    emailjs
        .sendForm(
        service_id,
        template_id,
        form.current,
        userId
        )
        .then(
        (result) => {
            console.log(result.text);
            alert("Thank you! We'll talk soon!");
        },
        (error) => {
            console.log(error.text);
            alert("Something went wrong. Please try again.");
            
        }
        );
        e.target.reset();
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-600 text-black dark:text-white">
      <div className="p-6 max-w-md w-full bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4" >
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              name="message"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
