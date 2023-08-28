import { Link } from "react-router-dom";

function MarketPlace() {
  const marketplaces = [
    {
      src: "/images/marketplaces/marketplace-1.png",
      title: "Salesforce",
      des: "A leading CRM platform that empowers businesses with comprehensive ",
    },
    {
      src: "/images/marketplaces/marketplace-2.png",
      title: "Slack",
      des: "A collaboration hub that revolutionises team communication ",
    },
    {
      src: "/images/marketplaces/marketplace-3.png",
      title: "Microsoft 365",
      des: "An integrated suite of productivity tools, including Word, Excel, PowerPoint, and ",
    },
    {
      src: "/images/marketplaces/marketplace-4.png",
      title: "Zoom",
      des: "A popular video conferencing and online meeting platform that enables seamless ",
    },
    {
      src: "/images/marketplaces/marketplace-5.png",
      title: "Zoho",
      des: "Zoho Corporation is an Indian multinational technology company that makes computer software and web-based business tools. ",
    },
    {
      src: "/images/marketplaces/marketplace-6.png",
      title: "Google",
      des: "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology etc ",
    },
    {
      src: "/images/marketplaces/marketplace-7.png",
      title: "AWS",
      des: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies ",
    },
    {
      src: "/images/marketplaces/marketplace-8.png",
      title: "Hubspot",
      des: "HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service ",
    },
  ];

  let mobileWidth = 767;
  let currentWidth = window.innerWidth;

  return (
    <div className="bg-[#F5F9FC] py-10 md:py-20">
      <div className="container">
        <div className="m-auto w-full md:w-1/2 text-center mb-8 md:mb-20">
          <h2 className="text-[24px] md:text-[40px] font-bold md:pb-4">
            Our Marketplace
          </h2>
          <p className="text-[#999999] text-sm md:text-base px-2">
            Experience the Convenience and Versatility of Our Expansive
            Marketplace, Offering a Vast Array of Cutting-Edge SaaS Solutions to
            Fuel Your Business Success
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-10 pb-10 md:pb-20">
          {marketplaces.map((item, j) => (
            <div
              key={j}
              className={`bg-light rounded-3xl p-6 relative ${
                currentWidth <= mobileWidth && j > 3 ? "hidden" : ""
              }`}
            >
              <div>
                <div className="border border-[#EDEDED] w-24 h-24 flex justify-center items-center rounded-full  mb-4">
                  <img src={item.src} alt={item.title} />
                </div>
              </div>
              <h2 className="text-2xl font-semibold pb-6">{item.title}</h2>
              <p className="text-[#999999] hidden md:block">
                {item.des}
                <Link className="text-[#1A1A1A] font-medium">Read More</Link>
              </p>

              <span className="w-9 h-9 flex justify-center items-center border border-[#EDEDED] rounded-full absolute top-5 right-6">
                <Link>
                  <i className="fas fa-arrow-up rotate-45"></i>
                </Link>
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="https://app.easexpense.com/dashboard/marketplace" className="hover:text-main inline-block  text-lg font-medium hover:bg-transparent bg-main text-light border border-main rounded-xl py-5 px-10 transition-all duration-300">
            Visit marketplace
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
