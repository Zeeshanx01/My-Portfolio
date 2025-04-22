import React from 'react'
import { motion} from 'framer-motion'


const fontStyles = {
  heading: "font-['Space_Grotesk'] font-bold",
  body: "font-['Inter'] font-light",
  mono: "font-['Fira_Code']"
}

const About = () => {
  return (
    <div>
      <section id="about" className="min-h-screen   mx-auto py-32">

        <motion.div
          className="max-w-6xl w-[90%] mx-auto backdrop-blur-xl bgred-500 bg-black/30 p-12 max-md:p-6 rounded-3xl border-2 border-purple-500/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >

          <h2 className={`text-4xl ${fontStyles.heading} text-purple-400 mb-8`}>
            &lt;About/&gt;
          </h2>





          <div className="grid md:grid-cols-2 w-[100%] bgblue-500 gap-12 items-center">


            <div className="space-y-6">

              <motion.p
                className={`text-xl max-md:text-md w[85%] text-white/80 leading-relaxed ${fontStyles.body}`}
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
              >
                With <span className="text-purple-300">5+ years</span> of experience in full-stack development,
                I bridge the gap between <span className="text-pink-300">technical excellence</span> and
                <span className="text-purple-300"> user-centered design</span>. Specialized in modern web
                technologies and interactive experiences.
              </motion.p>


              <motion.div
                className="flex gap-4 justify-end"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >

                <button className={`px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all ${fontStyles.mono}`}>
                  Download CV
                </button>

                {/* <button className={`px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:bg-white/10 transition-all ${fontStyles.mono}`}>
                          View Certifications
                        </button> */}

              </motion.div>
            </div>



            <motion.div
              className="relative h-64 w-64 mx-auto"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-purple-500/10 blur-2xl" />
              <div className="relative h-full w-full bg-black/50 backdrop-blur-sm rounded-2xl border-2 border-purple-500/30" />
            </motion.div>


          </div>




        </motion.div>
      </section>
    </div>
  )
}

export default About
