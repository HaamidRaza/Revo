import { Check, Copy, Mail, Phone } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [hasCopied, setHasCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handeCopy = () => {
    navigator.clipboard.writeText("haamidshaikh404@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div
      className="py-50 px-4 bg-gray-950 text-white"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                   radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
      }}
    >
      <div className="max-w-xl mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
            <p className="text-gray-300">We'd love to hear from you!</p>
          </div>

          <div className="flex flex-col justify-center items-start mt-4 md:mt-0 text-left">
            <h3 className="text-2xl font-semibold mb-2">Contact Info</h3>
            <div
              className="flex cursor-pointer items-center"
              onClick={handeCopy}
            >
              {hasCopied ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5 text-purple-400" />
              )}
              <p className="ml-2">haamidshaikh404@gmail.com</p>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-6 py-3 rounded-full text-gray-900 font-bold border-2 border-transparent focus:border-purple-500 focus:outline-none bg-amber-50"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-6 py-3 rounded-full text-gray-900 font-bold border-2 border-transparent focus:border-purple-500 focus:outline-none bg-amber-50"
            required
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full px-6 py-3 rounded-2xl text-gray-900 font-bold border-2 border-transparent focus:border-purple-500 focus:outline-none bg-amber-50"
            required
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full px-8 py-3 bg-purple-600 cursor-pointer text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-color"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
