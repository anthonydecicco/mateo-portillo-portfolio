"use client"

import { useState } from "react";

export default function ContactForm() {
  const [didSubmit, setDidSubmit] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        access_key: "d648356a-adb5-4e78-938f-4fc480cd954c",
        first_name: event.target.fname.value,
        last_name: event.target.lname.value,
        email: event.target.email.value,
        message: event.target.textarea.value,
      })
    });
    const result = await response.json();
    if (result.success) {
      setDidSubmit(true)
      console.log(result);
    }
  }

  return (
    <div className="w-full flex justify-center mb-10 ">
      <div className="mt-10 flex flex-col align-middle max-w-[40rem]">
        <p className={`${didSubmit === true ? `hidden` : `text-2xl md:text-4xl mt-12 text-center`} px-4`}>
          Want to get in touch? Fill out the form below to contact me directly!
        </p>
        <form
          className={`${didSubmit === true ? `hidden` : `px-4 md:px-0 text-2xl mt-24 md:w-[40rem] ml-auto mr-auto h-fit`}`}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap justify-between w-full h-fit ">
            <div className="w-full md:w-[18rem]">
              <label htmlFor="fname">First Name</label>
              <br></br>
              <input type="text" id="fname" className="w-full mb-10" required></input>
            </div>
            <div className="w-full md:w-[18rem]">
              <label htmlFor="lname">Last Name</label>
              <br></br>
              <input type="text" id="lname" className="w-full mb-10" required></input>
            </div>
          </div>

          <div className="mb-10">
            <label htmlFor="email">Email Address</label>
            <br></br>
            <input type="email" id="email" className="w-full" required></input>
          </div>

          <div className="mb-10">
            <label htmlFor="textarea">How can I help you?</label>
            <br></br>
            <textarea
              className="w-full min-h-[15rem] resize-none align-text-top text-wrap"
              id="textarea"
            ></textarea>
          </div>

          <button
            className="px-2 w-24 border rounded-lg transition ease-in-out duration-300 hover:no-underline text-center hover:text-background hover:bg-font"
            type="submit">
            Submit
          </button>
        </form>
        <p
          className={`${didSubmit === true ? `text-3xl md:text-4xl mt-24 w-full ml-auto mr-auto mb-20 px-10 text-center` : `hidden`}`}
        >
          Thanks for reaching out. I&apos;ll get back to you as soon as I can.
        </p>
      </div>
    </div>
  );
}