
import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/44ff5230-0639-11ee-8267-d3eb100789b4";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      className='w-full h-screen bg-[#1f242a] flex justify-center items-center p-8'
    >
      
      <div className='flex flex-col max-w-[600px] w-full'>
      <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#b48d22] text-[#b48d22]'>Contact</p>
                <p className='text-[#b48d22] py-4'>Send me a message</p>
            </div>
            <input className='bg-[#0b1016] text-[#b48d22] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#0b1016] text-[#b48d22]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#0b1016] p-2 text-[#b48d22]' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#b48d22] border-2 hover:bg-[#b48d22] hover:text-[#1f242a] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;