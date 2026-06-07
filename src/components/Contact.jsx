import React from "react";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data,e) => {
    console.log(data);
    e.target.submit();
    setTimeout(() => {
    reset();
  }, 100);
  alert("Message sent successfully!");
  }
  return (
    <>
      <Element name="contacts">
        <div className="w-full px-4 md:px-20 my-16">
          <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Please fill out the form below to contact me.
          </p>

          <div className="flex justify-center">
            <form 
            className="bg-white dark:bg-slate-800 dark:border-slate-700 border shadow-xl rounded-2xl p-8 w-full max-w-md" 
            action="https://forminit.com/f/3kvflb4fr7m" 
            method="POST"
            target="_blank" 
            onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Send Your Message ❤️
              </h2>

              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-400 mb-2">Full Name</label>
                <input
                  {...register("fi-sender-fullName", { required: true })} 
                  type="text"
                  name="fi-sender-fullName"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-slate-900 dark:border-slate-600 dark:text-white"
                />
                {errors["fi-sender-fullName"] && <span className="text-red-500">This field is required</span>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-400 mb-2">Email</label>
                <input
                  {...register("fi-sender-email", { required: true })} 
                  type="email"
                  name="fi-sender-email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-slate-900 dark:border-slate-600 dark:text-white"
                />
                {errors["fi-sender-email"] && <span className="text-red-500">This field is required</span>}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-400 mb-2">Message</label>
                <textarea
                  {...register("fi-text-message", { required: true })} 
                  rows="5"
                  name="fi-text-message"
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-slate-900 dark:border-slate-600 dark:text-white"
                ></textarea>
                {errors["fi-text-message"] && <span className="text-red-500">This field is required</span>}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:scale-105 duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <hr />
      </Element>
    </>
  );
};

export default Contact;
