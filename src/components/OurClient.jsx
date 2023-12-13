import { useState } from 'react'
import { motion } from 'framer-motion'

import { textVariant, slideIn } from '../utils/motion.js'
import MessageCard from './helper/MessageCard.jsx'
import BtnNextPrev from './helper/BtnNextPrev.jsx'
import profile from '../assets/profile.png'
import ceo_kratikal from '../assets/ceo_kratikal.png'
import ceo_getwork from '../assets/ceo_getwork.png'
import shivani from '../assets/shivani.png'

const messages = [
  {
    id: 'kratikal',
    name: 'Kratikal ',
    img: ceo_kratikal,

    Position: 'CEO',
    description:
      "Easexpense proactively manages our SaaS contracts and reporting, making our lives so much easier. Compared to similar products we've used in the past, the customer experience with Spendflo has been nothing short of delightful. We no longer have to worry about getting the best SaaS deals - it's all taken care of on auto-pilot!",
  },
  {
    id: 'getwork',
    name: 'GetWork',
    Position: 'Founder',
    img: ceo_getwork,

    description:
      'Transparency is crucial in any business relationship. Easexpense provides us with detailed reports and insights into our software usage and spending, allowing us to make informed decisions about our subscriptions. This level of transparency builds trust and ensures that our software investments are aligned with our business goals.',
  },
  {
    id: 'xgrowth',
    name: 'X-Growth',
    Position: 'Manager',
    img: shivani,

    description:
      'Managing our software subscriptions used to be a time-consuming and stressful process. Thankfully, Easexpense has lifted that burden off our shoulders. They handle all aspects of software management, leading to significant cost reductions. Their assistance is invaluable, and I am incredibly grateful for their expertise. ',
  },
]

export default function OurClient() {
  const [slideNo, setSlideNo] = useState(1)

  const nextSlide = () => {
    if (slideNo !== messages.length) {
      setSlideNo(slideNo + 1)
    } else setSlideNo(1)
  }
  const prevSlide = () => {
    if (slideNo !== 1) {
      setSlideNo(slideNo - 1)
    } else setSlideNo(messages.length)
    // console.log(slideNo)
  }
  return (
    <section
      id="message"
      className="flex flex-col justify-center items-center gap-20 md:px-32 px-8 py-24 bg-bl-primary text-black"
    >
      <motion.div
        variants={textVariant(0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" flex flex-col justify-center items-center  gap-3 text-center w-[50%]"
      >
        <h1 className="text-[2.5em] font-bold">Our Clients</h1>
        <p className="text-[#999999]">
          sit amet consecteturrit aliquam explicabo iure, ipsam repellat tenetur
          accusantium nisi, eum dignissimos quidem, perferendis nihil vitae.
        </p>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col justify-center  items-center  w-full  "
      >
        <div className="flex sm:flex-row flex-col overflow w-full py-7 gap-10 justify-center items-center ">
          <div className=" relative flex justify-center items-center w-full  rounded-3xl ">
            {messages.map((message, index) => (
              <MessageCard
                key={index}
                message={message}
                index={index}
                slideNo={slideNo}
              />
            ))}
          </div>
          <BtnNextPrev nextSlide={nextSlide} prevSlide={prevSlide} />
        </div>

        <div className="  gap-5 py-5 sm:flex  hidden">
          {messages.map((_, i) => (
            <div
              key={i}
              onClick={() => setSlideNo(i + 1)}
              className={`w-3  cursor-pointer h-3 rounded-full ${
                slideNo == i + 1 ? ' bg-[#ace5ff98] ' : 'bg-[#47474725]'
              } `}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
