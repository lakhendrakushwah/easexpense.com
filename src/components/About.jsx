import profile from '../assets/profile.png'
export default function About() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 py-16 my-10  ">
      <h1 className=" text-2xl text-[#444] text-center">
        There’s a reason we’re good at what we do:
      </h1>
      <h1 className="text-main text-5xl mx-5 text-center ">
        We’ve been part of the SaaS-buying process for years.
      </h1>
      <div className="flex flex-col drop-shadow-lg text-lg w-[45%] bg-white p-20 gap-5 rounded-lg mt-14  border-l-8 border-[#D0EDFB]">
        <p>
          Long before we built Spendflo, our team members were involved in
          selling SaaS across industries—which gave us a first-hand experience
          of SaaS-buying process.
        </p>
        <p>Over time, it struck us that:</p>
        <p className="pl-4">
          SaaS was one of the top 5 spends in any tech-forward company For
          mid-market, fast-growing organizations, SaaS spend was increasing at a
          rate of at least 25% Y-O-Y Despite this, businesses were still using
          the same systems to purchase SaaS, even when their stacks had grown
          from 20 tools to 120 tools.
        </p>
        <p>
          Procurement teams were overloaded. All of this meant businesses were
          wasting as much as 30% of their SaaS spends, and immense amounts of
          time.
        </p>
        <p>
          We had to change the way SaaS was bought and renewed. This was a
          tremendous opportunity for us to get real, guaranteed results for
          businesses.
        </p>
        <p> The surge of new SaaS tools had made price discovery harder.</p>
        <p>That’s why we built Easexpense.</p>
        <p className=" font-medium">
          We wanted to help our customers buy SaaS better, faster and easier.
        </p>
        <p className=" font-medium">
          Between the immense savings and hundreds of hours we save on
          procurement, our customers tell us we’re one of the best decisions
          they’ve made.
        </p>
      </div>
      <div className="flex flex-col text-center w-[60%] p-20 gap-20 rounded-lg mt-14">
        <p className="text-3xl mx-10 ">
          We’re a small but experienced team, determined to improve the SaaS
          buying experience.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <img
              src={profile}
              alt=""
              width={220}
              className="rounded-lg mb-7 border-b-8 border-[#D0EDFB]   "
            />
            <h1>Name</h1>
            <p>Position</p>
          </div>
          <div className="flex flex-col gap-1">
            <img
              src={profile}
              alt=""
              width={220}
              className="rounded-lg mb-7  border-b-8 border-[#D0EDFB]   "
            />
            <h1>Name</h1>
            <p>Position</p>
          </div>
          <div className="flex flex-col gap-1">
            <img
              src={profile}
              alt=""
              width={220}
              className="rounded-lg mb-7  border-b-8 border-[#D0EDFB]   "
            />
            <h1>Name</h1>
            <p>Position</p>
          </div>
        </div>
      </div>
    </div>
  )
}
