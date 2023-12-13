/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

export default function MessageCard({ message, index, slideNo }) {
  const isVisible = slideNo === index + 1
  return (
    <motion.div
      className={` flex bg-[#ace5ff33]  justify-center items-center w-[80%]  py-10 md:py-16  rounded-3xl  ${
        isVisible ? '' : 'hidden'
      }`}
      key={message.id}
      initial={{
        x: isVisible ? (index + 1) * 100 : 0,
        opacity: isVisible ? 0 : 1,
      }}
      animate={{
        x: isVisible ? 0 : (index + 1) * -100,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="flex flex-col text-[#444] w-[60%]  justify-center items-center  gap-10 sm:px-10  ">
        <img
          src={message.img}
          alt="company icon"
          width={60}
          className="rounded-full"
        />

        <h1 className="flex text-[1.3em] text-[#444] items-center text-center">
          {message.description}
        </h1>
        <div className="flex justify-center items-center gap-7 ">
          <img
            src={message.img}
            alt="profle"
            width={50}
            className="rounded-full"
          />
          <div className="flex text-[0.8em] flex-col gap-1">
            <span>{message.name}</span>
            <span>{message.Position}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
