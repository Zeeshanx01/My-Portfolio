import React from 'react'
import { motion} from 'framer-motion'


const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}


const Contact = () => {
  return (
    <div>
      <section id="contact" className="min-h-screen py-20 px-4">
        <motion.div
          className="max-w-2xl mx-auto backdrop-blur-xl bg-black/30 p-12 rounded-3xl border-2 border-purple-500/30"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
        >
          <motion.h2
            className={`text-4xl ${fontStyles.heading} text-purple-400 mb-8`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            &lt;Contact/&gt;
          </motion.h2>

          <form className="space-y-6">
            {['Name', 'Email', 'Message'].map((field, index) => (
              <motion.div
                key={field}
                className="space-y-2"
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <label className={`block text-white/80 ${fontStyles.mono}`}>
                  Your {field}
                </label>
                <motion.div whileHover={{ y: -2 }}>
                  {field === 'Message' ? (
                    <textarea
                      rows="5"
                      className="w-full bg-black/40 border-2 border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                    />
                  ) : (
                    <input
                      type={field === 'Email' ? 'email' : 'text'}
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
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact
