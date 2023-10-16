"use client";

import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  // state handling
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  // console.log("userdata : ", userData);

  // function to post data in contact DB
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", userData);
      setUserData({
        name: "",
        email: "",
        comment: "",
      });
      toast.success("Data submitted successfully!")
      console.log("userdata submitted successfully ! ");
      // console.log(response);
    } catch (error) {
      console.log("errror occured while submitting data ", error);
    }
  };

  return (
    <div className="w-full sm:w-3/4 md:w-1/2 bg-slate-400 p-4 rounded m-auto">
      <Toaster/>
      <form action="" onSubmit={submitData}>
        <div className="flex gap-4 flex-col w-full items-center justify-center">
          <h1 className="text-2xl font-semibold text-red-600">Contact Us</h1>

          {/* input values and labels */}
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="name">Enter your name</label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              type="text"
              value={userData.name}
              placeholder="farhan ahmad"
              required
              className="p-2 rounded-sm outline-none"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="email">Enter your email</label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              type="text"
              value={userData.email}
              placeholder="farhan123@gmail.com"
              required
              className="p-2 rounded-sm outline-none"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label>Leave a comment</label>
            <textarea
            required
              value={userData.comment}
              onChange={(e) =>
                setUserData({ ...userData, comment: e.target.value })
              }
              placeholder="Thank you for visit our website..."
              className="p-2 rounded-sm outline-none"
            />
          </div>
          <button
            type="submit"
            className="py-1 px-4 hover:bg-red-500 w-full bg-red-600 transition-all duration-200 text-white rounded font-semibold"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
