import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [msg, setmsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pyffx3q",
        "template_us3bnuq",
        form.current,
        "68OBi16__a-QZKasA"
      )
      .then(
        () => {
          setmsg("Message sent successfully!");
          console.log("Email sent successfully.");
        },
        (error) => {
          setmsg("Failed to send the message. Please try again later.");
          console.error(error);
        }
      );
  };

  const contact_info = [
    { logo: "mail", text: "gaganaik127@gmail.com" },
    { logo: "call-outline", text: "+91 7619401808" },
    {
      logo: "location",
      text: "Karwar Uttarkannada Karnataka, India",
    },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
              className="input-style"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              name="from_name"
              required
              className="input-style"
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              name="message"
              required
              className="input-style"
            ></textarea>
            <button className="btn-primary w-fit" type="submit">
              Send Message
            </button>
            {/* Success/Error Message */}
            {msg && <p className="text-cyan-500 mt-3">{msg}</p>}
          </form>

          {/* Contact Information */}
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
