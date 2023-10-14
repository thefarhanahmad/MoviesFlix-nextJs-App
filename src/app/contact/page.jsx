import React from "react";
import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <div className="w-full h-[80vh] bg-gray-200 flex justify-center items-center">
      <div className="w-[80%] flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default contact;
