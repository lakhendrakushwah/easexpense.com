import { marketplaceVariant } from '../utils/motion'
import { motion } from 'framer-motion'
const company = [
  {
    id: 'company-1',
    src: '/images/companies/company-1.png',
  },
  {
    id: 'company-2',
    src: '/images/companies/company-2.png',
  },
  {
    id: 'company-3',
    src: '/images/companies/company-3.png',
  },
  {
    id: 'company-4',
    src: '/images/companies/company-4.png',
  },
  {
    id: 'company-5',
    src: '/images/companies/company-5.png',
  },
]
function Company() {
  return (
    <div className=" container">
      <h4 className="text-[#999999] text-lg pt-10 md:pt-20 lg:pt-32 pb-10 text-center">
        Trusted by 10+ companies
      </h4>
      <div className="relative flex justify-center items-center w-full overflow-x-hidden ">
        <motion.div
          variants={marketplaceVariant()}
          initial="hidden"
          animate="show"
          className="flex flex-row w-full justify-between items-center "
          style={{ marginBottom: '100px' }}
        >
          {company.map((el, i) => (
            <div
              key={i}
              className="flex-shrink-1 flex-grow basis-1/4 lg:basis-[15%] flex justify-center items-center"
            >
              <img className="" width={140} src={el.src} alt={el.id} />
            </div>
          ))}
        </motion.div>
        <div
          className="absolute  w-[100px] h-[100px] left-0 top-5"
          style={{
            background:
              'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))',
          }}
        />

        <div
          className="absolute w-[100px] h-[100px] right-0 top-5"
          style={{
            background:
              'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)',
          }}
        />
      </div>
    </div>
  )
}

export default Company
