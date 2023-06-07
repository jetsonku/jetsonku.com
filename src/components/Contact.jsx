import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
    emailjs.sendForm('service_xnskcxj', 'template_id3gxxc', form.current, 'Rd3OjvtjLT6zcg5uq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  if (submitted) {
    return (
      <>
        <div className='w-full bg-[#1f242a] pt-16 text-[#b48d22] flex justify-center items-center'>Thanks for the message!</div>
        <div className='w-full bg-[#1f242a] pb-16 text-[#b48d22] flex justify-center items-center'>I'll get back to you as soon as possible</div>
      </>
    );
  }

  return (
    <div>
    <form
      ref={form}
      onSubmit={sendEmail}
      method="POST"
      className='w-full h-screen bg-[#1f242a] flex justify-center items-center p-8'
    >
      
      <div className='flex flex-col max-w-[600px] w-full'>
      <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#b48d22] text-[#b48d22]'>Contact</p>
                <p className='text-[#b48d22] py-4'>Send me a message</p>
            </div>
            <input className='bg-[#0b1016] text-[#b48d22] p-2' type="text" placeholder='Name' name='user_name' />
            <input className='my-4 p-2 bg-[#0b1016] text-[#b48d22]' type="email" placeholder='Email' name='user_email' />
            <textarea className='bg-[#0b1016] p-2 text-[#b48d22]' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#b48d22] border-2 hover:bg-[#b48d22] hover:text-[#1f242a] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </div>
    </form>
    </div>
  );
};

export default Contact;