import { useState } from 'react'
import { motion } from 'framer-motion'

import { textVariant, slideIn } from '../utils/motion.js'
import MessageCard from './helper/MessageCard.jsx'
import BtnNextPrev from './helper/BtnNextPrev.jsx'
import profile from '../assets/profile.png'

const messages = [
  {
    id: 'google',
    name: 'Google ',
    img: profile,

    Position: 'CEO',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam velit adipisci dicta. Similique repudiandae reprehenderit aliquam explicabo iure, ipsam repellat tenetur accusantium nisi, eum dignissimos quidem, perferendis nihil vitae.Lorem ipsum dolor',
  },
  {
    id: 'zoho',
    name: 'ZOHO',
    Position: 'Manager',
    img: profile,

    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam velit adipisci dicta. Similique repudiandae reprehenderit aliquam explicabo iure, ipsam repellat tenetur accusantium nisi, eum dignissimos quidem, perferendis nihil vitae.',
  },
  {
    id: 'loom',
    name: 'lOOm',
    Position: 'co-founder',
    img: profile,

    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam velit adipisci dicta. Similique repudiandae reprehenderit aliquam explicabo iure, ipsam repellat tenetur accusantium nisi, eum dignissimos quidem, perferendis nihil vitae.',
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
