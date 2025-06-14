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
        headers: { Accept: 'application/json' },
        body: formData,
      });

      const data = await res.json();

      if (data.success === 'true') {
        toast.success('Message sent successfully!', {
          style: {
            background: '#1f1f1f',
            color: '#d8b4fe',
            border: '1px solid #a855f7',
            fontFamily: 'var(--font-fira-code)',
          },
          iconTheme: {
            primary: '#a855f7',
            secondary: '#1f1f1f',
          },
        });
        form.reset();
      } else {
        toast.error('Something went wrong. Try again!', {
          style: {
            background: '#1f1f1f',
            color: '#ffb4b4',
            border: '1px solid #ff4f4f',
            fontFamily: 'var(--font-fira-code)',
          },
          iconTheme: {
            primary: '#ff4f4f',
            secondary: '#1f1f1f',
          },
        });
      }
    } catch (err) {
      toast.error('Error submitting form');
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20  mx-12 max-lg:mx-8 max-md:mx-1">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-16">


        {/* Form */}
        <motion.div
          className="w-full flex max-md:flex-col space-x-4 backdrop-blur-sm bg-black/30 p-10 rounded-3xl border-2 border-purple-500/30"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >


          <div className='md:w-[60%] flex flex-col justify-between bg-blue500 '>

            <motion.h2
              className={`text-4xl ${fontStyles.heading} text-purple-400 mb-2`}
            >
              &lt;Contact/&gt;
            </motion.h2>


            <div className='w-full bg-yellow500 flex justify-center items-center'>

              {/* Illustration */}
              <motion.div
                className="w-screen md:w-1/2 py-10 flex justify-center items-center bg-red400"
              // initial={{ opacity: 0, x: -50 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.7 }}
              >
                <img
                  src="/Contact/undraw_personal-text_090t.svg"
                  alt="Contact Illustration"
                  className="w-[20rem] max-sm:w-[70%] max-w-md"
                />
              </motion.div>

            </div>



            <p className={`${fontStyles.body} text-white/70 mb-8 `}>
              Feel free to reach out for collaborations or just a friendly hello!
              I'll get back to you as soon as I can
            </p>


          </div>





          <div className='md:w-[40%]'>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {['Name', 'Email', 'Message'].map((field, index) => (
                <motion.div
                  key={field}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <label className={`block text-white/80 ${fontStyles.mono}`}>
                    Your {field}
                  </label>
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



            <p className="text-center mt-6 text-purple-300 text-sm">
              I’ll contact you shortly. Thanks for taking the time!
            </p>



          </div>




        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
