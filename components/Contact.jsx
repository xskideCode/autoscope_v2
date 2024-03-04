"use client";

import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (email && firstName && message) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, firstName, message]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !firstName || !message) {
      toast.error("Please fill in all required fields");
      return;
    }

    const contactMessage = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactMessage),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data && data.id) {
        toast.success("Message sent!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        throw new Error("Data is not valid");
      }
    } catch (error) {
      toast.error("An error occurred while sending the message");
    }
  };

  return (
    <div className="container mx-auto my-4 px-4 lg:px-20">
      <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
        <div className="flex">
          <h1 className="font-bold uppercase text-5xl">
            Send us a <br /> message
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="my-4">
          <textarea
            placeholder="Message"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <div className="my-2 w-1/2 lg:w-1/4">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-emerald-800 text-gray-100 p-3 rounded-lg w-full 
        focus:outline-none focus:shadow-outline hover:bg-emerald-700 focus:bg-emerald-700"
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            Send
          </button>
        </div>
      </div>

      <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-emerald-800 rounded-2xl">
        <div className="flex flex-col text-white">
          <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
          

          <div className="flex my-4 w-2/3 lg:w-5/6  xl:w-1/2">
            <div className="flex flex-col">
              <FaMapMarkerAlt className="pt-2 pr-2" size={24} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Main Office</h2>
              <p className="text-gray-400 ">
                Shelter Afrique House 3rd Floor, Longonot Road, Upper Hill,{" "}
                <br />
                Nairobi Kenya
              </p>
            </div>
          </div>

          <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <FaPhoneAlt className="pt-2 pr-2" size={24} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Call Us</h2>
              <p className="text-gray-400">
                Tel: <span className="text-sm text-nowrap">(+254) 202 111 503</span>
              </p>
              <p className="text-gray-400">
                Tel: <span className="text-sm text-nowrap">(+254) 733 866 759</span>
              </p>
              <p className="text-gray-400">
                Tel: <span className="text-sm text-nowrap">(+254) 721 396 913</span>
              </p>
            </div>
          </div>

          <div className="flex my-4 w-2/3 lg:w-1/2">
            <a
              href="https://www.facebook.com/@topiblutours"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center p-1"
            >
              <FaFacebookF className="text-emerald-800" size={22} />
            </a>
            <a
              href="https://www.ke.linkedin.com/in/topiblutours"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center p-1"
            >
              <FaLinkedinIn className="text-emerald-800" size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
