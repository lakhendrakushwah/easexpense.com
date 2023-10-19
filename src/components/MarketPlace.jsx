import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import img1 from '../../public//images/marketplaces/marketplace-1.png'
import img2 from '../../public//images/marketplaces/marketplace-2.png'
import img3 from '../../public//images/marketplaces/marketplace-3.png'
import img4 from '../../public//images/marketplaces/marketplace-4.png'
import img5 from '../../public//images/marketplaces/marketplace-5.png'
import img6 from '../../public//images/marketplaces/marketplace-6.png'
import img7 from '../../public//images/marketplaces/marketplace-7.png'
import img8 from '../../public//images/marketplaces/marketplace-8.png'

import {
  companiesVariant,
  companiesVariant2,
  textVariant,
} from '../utils/motion'

function MarketPlace() {
  return (
    <div className=" py-10 md:py-20 ">
      <div className="container flex flex-col gap-20 justify-center items-center  ">
        <motion.div
          variants={textVariant(0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="m-auto  flex flex-col justify-center items-center  w-full md:w-1/2 text-center "
        >
          <h2 className="text-[24px] md:text-[40px] font-bold md:pb-4">
            Our Marketplace
          </h2>
          <p className="text-[#999999] text-sm md:text-base px-2">
            Experience the Convenience and Versatility of Our Expansive
            Marketplace, Offering a Vast Array of Cutting-Edge SaaS Solutions to
            Fuel Your Business Success
          </p>
        </motion.div>

        <div className="h-[400px] w-[60%]  flex  relative">
          <motion.div
            variants={companiesVariant('right')}
            initial="hidden"
            animate="show"
            className=" absolute z-10 left-0 w-full  flex justify-between"
          >
            <div className="bg-white justify-center items-center p-5 drop-shadow-xl rounded-full">
              <img width={70} src={img1} alt="Salesforce" />
            </div>
            <div className="bg-white justify-center items-center mt-3 p-7 drop-shadow-xl rounded-full">
              <img width={50} src={img2} alt="Slack" />
            </div>
            <div className="bg-white justify-center items-center mt-3 p-7 drop-shadow-xl rounded-full">
              <img width={50} src={img3} alt="Microsoft 365" />
            </div>
          </motion.div>
          <motion.div
            variants={companiesVariant2()}
            initial="hidden"
            animate="show"
            className=" absolute z-10 left-52 w-[50%] top-32 flex justify-between"
          >
            <div className="bg-white justify-center  px-6 items-center p-5 drop-shadow-xl rounded-full">
              <img className=" mt-4" width={60} src={img4} alt="zoom" />
            </div>
            <div className="bg-white justify-center  items-center p-5 drop-shadow-xl rounded-full">
              <img className="mt-8" width={70} src={img5} alt="Zoho" />
            </div>
          </motion.div>
          <motion.div
            variants={companiesVariant('left')}
            initial="hidden"
            animate="show"
            className=" absolute z-10 bottom-0 left-0 w-full flex justify-between"
          >
            <div className="bg-white justify-center items-center p-5 drop-shadow-xl rounded-full">
              <img width={70} src={img6} alt=" Hubspot" />
            </div>
            <div className="bg-white justify-center items-center p-5 drop-shadow-xl rounded-full">
              <img className="mt-6" width={70} src={img7} alt="AWS" />
            </div>
            <div className="bg-white justify-center items-center p-5 drop-shadow-xl rounded-full">
              <img width={70} src={img8} alt="Google" />
            </div>
          </motion.div>
          <div className=" absolute top-44  left-10 flex justify-between w-[100%]">
            <div className="rounded-full  w-4 h-4 bg-[#F0C99B]" />
            <div className=" rounded-full  w-3 h-3 bg-[#A6BFF5]" />
            <div className=" rounded-full  w-5 h-5 bg-[#EEB0CF]" />
          </div>
          <div className=" absolute right-40  top-5 rounded-full  w-4 h-4  bg-[#33A852]" />
          <div className="left-48  top-5  rounded-full absolute w-3 h-3 bg-[#F1511B]" />
          <div className=" absolute right-52  bottom-5 rounded-full  w-4 h-4  bg-[#F1511B]" />
          <div className=" bottom-5  left-48 rounded-full absolute w-3 h-3 bg-[#33A852]" />
        </div>

        <div className="text-center">
          <Link
            to="https://app.easexpense.com/dashboard/marketplace"
            className="hover:text-main inline-block  text-md font-medium hover:bg-transparent bg-main text-light border border-main rounded-xl py-4 px-10 transition-all duration-300"
          >
            Visit marketplace
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MarketPlace

// const marketplaces = [
//   {
//     src: '/images/marketplaces/marketplace-1.png',
//     title: 'Salesforce',
//     des: 'A leading CRM platform that empowers businesses with comprehensive ',
//   },
//   {
//     src: '/images/marketplaces/marketplace-2.png',
//     title: 'Slack',
//     des: 'A collaboration hub that revolutionises team communication ',
//   },
//   {
//     src: '/images/marketplaces/marketplace-3.png',
//     title: 'Microsoft 365',
//     des: 'An integrated suite of productivity tools, including Word, Excel, PowerPoint, and ',
//   },
//   {
//     src: '/images/marketplaces/marketplace-4.png',
//     title: 'Zoom',
//     des: 'A popular video conferencing and online meeting platform that enables seamless ',
//   },
//   {
//     src: '/images/marketplaces/marketplace-5.png',
//     title: 'Zoho',
//     des: 'Zoho Corporation is an Indian multinational technology company that makes computer software and web-based business tools. ',
//   },
//   {
//     src: '/images/marketplaces/marketplace-6.png',
//     title: 'Google',
//     des: 'Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology etc ',
//   },
//   {
//     src: '/images/marketplaces/marketplace-7.png',
//     title: 'AWS',
//     des: 'Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies ',
//   },
//   {
//     src: '/images/marketplaces/marketplace-8.png',
//     title: 'Hubspot',
//     des: 'HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service ',
//   },
// ]
