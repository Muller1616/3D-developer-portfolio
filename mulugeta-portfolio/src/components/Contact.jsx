import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error & success message when user types
    setFormErrors({ ...formErrors, [name]: "" });
    setSuccessMessage("");
  };

  const validateForm = () => {
    let errors = {};

    if (!form.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      errors.message = "Please enter your message.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_03sj3v8",
        "template_kr9lx4s",
        {
          from_name: form.name,
          to_name: "Mulugeta Abeje",
          from_email: form.email,
          to_email: "mulugetaabeje16@gmail.com",
          message: form.message,
        },
        "OKuDWBYibsdch8MFG"
      )
      .then(() => {
        setLoading(false);
        setSuccessMessage("Thank you!, Successfully sent"); // Set success message

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setFormErrors({}); // Clear errors after successful submission
        //Hide the success text after 3 seconds
        setTimeout(() =>{
          setSuccessMessage("");
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setSuccessMessage("Something went wrong. Please try again."); // Error message in green (optional)
        setTimeout(() =>{
          setSuccessMessage("");
        }, 3000);
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Let’s connect</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
          
          {/* Name Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Name:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
          </label>

          {/* Email Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Email:</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
          </label>

          {/* Message Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Message:</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type here your message..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {formErrors.message && <p className="text-red-500 mt-1">{formErrors.message}</p>}
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-5 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-blue-900"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {/* Success Message */}
          {successMessage && <p className="text-green-500 mt-3">{successMessage}</p>}
          
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
