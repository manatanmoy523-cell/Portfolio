import React from "react";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data,e) => {
    console.log(data);
    e.target.submit();
  }
  return (
    <>
      <Element name="contacts">
        <div className="w-full px-4 md:px-20 my-16">
          <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
          <p className="text-gray-600 mb-8">
            Please fill out the form below to contact me.
          </p>

          <div className="flex justify-center">
            <form 
            className="bg-slate-200 shadow-lg rounded-xl p-8 w-full max-w-md" 
            action="https://forminit.com/f/3kvflb4fr7m" 
            method="POST" 
            onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Send Your Message ❤️
              </h2>

              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  {...register("fi-sender-fullName", { required: true })} 
                  type="text"
                  name="fi-sender-fullName"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors["fi-sender-fullName"] && <span className="text-red-500">This field is required</span>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  {...register("fi-sender-email", { required: true })} 
                  type="email"
                  name="fi-sender-email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors["fi-sender-email"] && <span className="text-red-500">This field is required</span>}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  {...register("fi-text-message", { required: true })} 
                  rows="5"
                  name="fi-text-message"
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                {errors["fi-text-message"] && <span className="text-red-500">This field is required</span>}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 duration-300 cursor-pointer"
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
