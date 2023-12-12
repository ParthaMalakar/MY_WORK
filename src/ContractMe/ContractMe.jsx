import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const ContractMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_73sfxtc', 'template_810trg3', form.current, 'Y56lw4c5cc5zv2Gcn')
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Email Send to Partha Malakar",
                showConfirmButton: false,
                timer: 1500
              });
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className=' bg-sky-100'>
        <div className="max-w-4xl text-center mx-auto p-4">
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          <strong>Address:</strong> Kurill, Dhaka, Bangladesh
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> (+88) 01753102575
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> parthamalakar667@gmail.com
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              required
              name="name"
              value={name} onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={message} onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
        
    );
};

export default ContractMe;