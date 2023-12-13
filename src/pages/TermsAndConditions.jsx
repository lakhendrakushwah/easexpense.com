import React from "react";

function TermsAndConditions() {
    
    const TermsAndConditions =[
        {
            heading:"Overview",
            condition:"Your contract with Easenode Tech PVT. Ltd is governed by the terms listed below. By accessing or using this website, you acknowledge that you have read, comprehended, and agree to be bound by these terms as well as any applicable laws and regulations. Easenode Tech PVT. Ltd has the right to modify these Terms of Use, as well as any other material on the website, at any time and without notice. Easenode Tech PVT. Ltd reserves the right, at any time and without notice, to make modifications or improvements to the items, services, or programs described on this site.",
        },

        {
            heading:"General",
            condition:"This Terms and condition explains what personal information Easenode Tech PVT. Ltd gathers or obtains while providing our services, how we use it, and what choices you have. A section of this website allows users to access information in specific areas. Any content from this site or any other social media may not be mirrored. If you fail to comply with these terms or any other rules on this site, your rights will be automatically terminated without notice, and you must immediately destroy all copies of downloaded content in your possession or custody.",
        },

        {
            heading:"Disclaimer",
            condition:"You should use the most recent pages on this website to confirm the accuracy and completeness of information before making any decisions about services or goods discussed on this website. Because this website may contain technical flaws or typographical errors, we cannot guarantee that any uploaded material is accurate. If a competent legal body finds any term in this Terms of Use to be unenforceable in any way, the validity of the rest of this Terms of Use will not be affected if the unenforceability does not materially affect the parties' rights under this Terms of Use.",
        },

        {
            heading:"Confidential Information",
            condition:"Confidential information is any nonpublic information that is supplied, revealed, or conveyed, regardless of the form or way it is provided, disclosed, or sent. Easenode Tech PVT. Ltd agrees, acknowledges, and commits to always keep the sensitive information confidential. Easenode Tech PVT. Ltd  and you agree to keep the confidential information entirely confidential and not to use, make available, sell, distribute, disclose, publish, or make such confidential information accessible to any third party in any way, whether directly or indirectly.",
        },
    ]

    return (
        <div>

            <div className=" h-80 bg-[url('https://healthyresumes.com/wp-content/uploads/2022/10/LinkedIn-Background-Photo-47-1.webp')]" bd>
                <h1 className=" text-center text-6xl pt-20 text-slate-50">Terms and Conditions</h1>
            </div>
            <div className="shadow-2xl p-10 mb-10 mx-40 -mt-40 bg-[#fff]">

                <p className="text-[#999999] pb-4 ">
                    These 'Terms of Use' define the rules and regulations for using the Easexpense website (easexpense.com). By using this website, we assume you accept these 'Terms and Conditions' in its entirety. If you disagree with these terms and conditions, you must not use this website.
                </p>

                {TermsAndConditions.map((condition, i)=>(
                    <div key={i}>
                        <h2 className="text-2xl pb-4">{condition.heading}</h2>
                        <p className="text-[#999999] pb-4" >{condition.condition}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default TermsAndConditions;