'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
};

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://formsubmit.co/ajax/zeeshan.x01000@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      const data = await res.json();

      if (data.success === 'true') {
        toast.success('Message sent successfully!');
        form.reset(); // reset the form
      } else {
        toast.error('Something went wrong. Try again!');
      }
    } catch (err) {
      toast.error('Error submitting form');
    }
  };

  return (
    <div>
      <section id="contact" className="min-h-screen py-20 px-4">
        <motion.div
          className="max-w-2xl mx-auto backdrop-blur-xl bg-black/30 p-12 rounded-3xl border-2 border-purple-500/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className={`text-4xl ${fontStyles.heading} text-purple-400 mb-8`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            &lt;Contact/&gt;
          </motion.h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {['Name', 'Email', 'Message'].map((field, index) => (
              <motion.div
                key={field}
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <label className={`block text-white/80 ${fontStyles.mono}`}>
                  Your {field}
                </label>
                <motion.div whileHover={{ y: -2 }}>
                  {field === 'Message' ? (
                    <textarea
                      name="message"
                      required
                      rows="5"
                      className="w-full bg-black/40 border-2 border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                    />
                  ) : (
                    <input
                      type={field === 'Email' ? 'email' : 'text'}
                      name={field.toLowerCase()}
                      required
                      className="w-full bg-black/40 border-2 border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Send Message</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
