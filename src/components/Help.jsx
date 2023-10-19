import { motion } from 'framer-motion'
import { slideIn, textVariant } from '../utils/motion'

function Help() {
  const blogs = [
    'We analyze your SaaS stack, and show you what you could be saving.',
    'Your team requests and approves new tools using our dashboard and Slack app',
    'We get you the best deals and terms on your chosen software based on your needs.',
    'We automate IT clearance, legal approval and compliance processes.',
    'Your team starts using the tool!',
  ]
  return (
    <div className="bg-[#FAFAFA] py-10 md:py-20">
      <div className="container">
        <motion.div
          variants={textVariant(0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 flex flex-col items-center gap-5 md:mb-20"
        >
          <h2 className="text-[24px] md:text-[40px] font-bold ">
            Here&#39;s how it works
          </h2>
          <p className="text-[#999999] text-sm md:text-base px-2 max-w-prose md:w-1/2">
            Driving your success through tailored solutions and unmatched
            expertise
          </p>
        </motion.div>

        <div className="flex  flex-wrap justify-center items-center gap-7 w-full ">
          {blogs.map((no, i) => (
            <motion.div
              key={i}
              variants={slideIn('right', 'spring', i * 0.3, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-light flex text-center flex-col mx-2 h-[200px] justify-center gap-5 items-center px-3 rounded-3xl  drop-shadow-md"
            >
              <p className="flex justify-center items-center   rounded-full text-center  font-poppins ">
                {i + 1}
              </p>
              <p className="w-[300px] mb-5">{no}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Help
