import React from "react";

function PrivacyPolicy() {

    const TermsAndConditions = [
        {
            heading: "About this policy",
            condition: "Your privacy is important to us, and we are committed to protect your privacy. We believe it is important for you to know what personal data we at Easenode Tech Pvt. Ltd (“Easenode” or “we”) collect from you, why we collect it, how we use it and what rights you might be entitled to as a data subject or consumer. It is important that you read this policy, together with any additional and more specific information we may provide to you on various occasions when we are collecting or processing personal data. Your use of our sites or products or services indicates you agree to our collection, usage, and disclosure of your information as described in this Privacy Policy.",
        },
    ]

    return (
        <div>

            <div className=" h-80 bg-[url('https://healthyresumes.com/wp-content/uploads/2022/10/LinkedIn-Background-Photo-47-1.webp')]" bd>
                <h1 className=" text-center text-6xl pt-20 text-slate-50">Privacy Policy</h1>
            </div>
            <div className="shadow-2xl p-10 mb-10 mx-40 -mt-40 bg-[#fff]">

                <p className="text-[#999999] pb-4 ">Welcome to Kratikal.com
                    These "Terms of Use" define the rules and regulations for using the Kratikal website (kratikal.com).
                    By using this website, we assume you accept these "Terms and Conditions" in its entirety. If you disagree with these terms and conditions, you must not use this website.
                </p>

                {TermsAndConditions.map((condition, i) => (
                    <div key={i}>
                        <h2 className="text-2xl pb-4">{condition.heading}</h2>
                        <p className="text-[#999999] pb-4" content="html">{condition.condition}</p>

                    </div>
                ))}
                <div>
                    <h2 className="text-2xl pb-4">Information we collect</h2>
                    <p className="text-[#999999] pb-4" content="html">
                        <p>
                            We collect only the information needed for legitimate business purpose.
                        </p>
                        <br></br>
                        <p>
                            You may need to provide some personal information such as your full name, email ID, contact details, designation etc. when you sign up for an account, register for an event, ask for customer support, wish to buy our product or services.
                        </p>
                        <p>
                            If you are availing our products or services; we may collect following personal information from you or through your employer - full name, email id, contact details, address, designation, fax etc.
                        </p>
                        <br></br>
                        <p>
                            We may collect personal information directly from publicly available databases, social media sites or in collaboration with our partners from time to time. You may also need to provide some personal information if you wish to explore employment opportunities with us.
                        </p>
                        <br></br>
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl pb-4">What we do with your personal information</h2>
                    <p className="text-[#999999] pb-4" content="html">
                        <p>
                            We do not share or sell your personal information to anyone. We use personal information solely for the purpose of interacting with you and to enable you to avail our product or services. We use personal information only for the specific reason for which it is provided.
                            <br/>
                            Some personal information is required:
                            <ul style={{listStyle: 'unset', paddingLeft: '30px', paddingTop: '20px'}}>
                                <li>
                                    To manage, administer and fulfill the obligations under contracts
                                </li>
                                <li>
                                    To promote the Easenode brand, products, initiatives and values with marketing communications.
                                </li>
                            </ul>
                        </p>
                        <br></br>
                        <p>
                            We may send you marketing communications through various channels, such as email or phone; to do so, we might use your name, email id, and contact details. You can opt-out of receiving such communications at the time of first contact over the email or any time by writing to us at support@easenode.com                        
                        </p>
                        <br></br>
                        <p>
                            We will only use your personal data for the purposes for which we collect it, we reasonably consider that we need to use it for another reason that is compatible with the original purpose and applicable local law. Any exceptions will be brought to your notice and legal basis for the same will be explained.                        
                        </p>
                        <br></br>
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl pb-4">We will not share your personal information</h2>
                    <p className="text-[#999999] pb-4" content="html">
                        <p>
                            We do not share your personal data with anyone else and we will never sell personal data. However, exemptions to the above are where Easenode is asked to provide information because of any legal or regulatory requirements. We will make every effort that such mandated disclosures from the regulatory authorities are communicated to you.
                        </p>
                        <br></br>
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl pb-4">How long will we keep your personal information?</h2>
                    <p className="text-[#999999] pb-4" content="html">
                        <p>
                            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                        </p>
                        <br></br>
                        <p>
                            In some circumstances we may anonymize your personal data so that it can no longer be directly associated with you.
                        </p>
                        <br></br>
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl pb-4">How will we keep your information safe?</h2>
                    <p className="text-[#999999] pb-4" content="html">
                        <p>
                            We are fully committed to information security and compliance with applicable regulation. We have implemented strong security controls for the protection of data. We have designed and implemented information security programs in line with International Organization for Standardization (ISO) 27001:2013 standard and Service Organization Controls 2 (SOC). We have put in place appropriate measures to comply with the European Union (EU) General Data Protection Regulation (GDPR).
                        </p>
                        <br></br>
                        <p>
                            Though we take reasonable measures to protect our assets against unauthorised access or attack; Internet inherently is not fully secure. While we work towards and strive to protect your personal information/privacy, we would like you to take note of inherent Internet risks associated with data transfer and processing. You also need to ensure that your User ID, Password etc. are not disclosed with anyone and your systems are safe for usage.
                        </p>
                        <br></br>
                        <p>
                            At any point, if you suspect any security issues or incidents, or you receive any suspicious mail from someone holding themselves out to be a Easenode employee or from a fake website claiming to be affiliated with Easenode, you may should first reach out to us at support@easenode.com
                        </p>
                        <br></br>
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl pb-4">How are cookies used?</h2>
                    <p className="text-[#999999] pb-4" content="html">
                        <p>
                            Cookie is a small piece of data stored on the user's computer by the web browser while browsing a website. We use cookies to improve the quality of our site and service, and to try and make your browsing experience meaningful. Cookies may be used to track how you interact with our sites and to analyse trends. The types of data collected may include IP addresses, cookie identifiers, site activities etc.
                        </p>
                        <br></br>
                        <p>
                            We use first-party and third-party cookies for several purposes. The first-party cookies are mostly necessary for the website to function the right way.
                        </p>
                        <br></br>
                        <p>
                            The third-party cookies used on our websites are used mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing information that is relevant to you, and all in all providing you with a better and improved user experience.
                        </p>
                        <br></br>
                        <p>
                            You can control the use of cookies, but if you choose to disable cookies, it may limit your use of certain features or functions on our website or service.
                        </p>
                        <br></br>
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl pb-4">How to contact us?</h2>
                    <p className="text-[#999999] pb-4" content="html">
                        <p>
                            If you have a privacy concern, complaint, or a question regarding this privacy statement, please let us know by sending an email to support@easenode.com
                        </p>
                        <br></br>
                        <p>
                            We value your trust and will take the appropriate measures to ensure that we fulfill your request.
                        </p>
                        <br></br>
                        <h3>You have certain choices</h3>
                        <p>
                            You may contact us at support@easenode.com on various matters pertaining to your personal information such as –
                            <ul style={{listStyle: 'unset', paddingLeft: '30px', paddingTop: '20px'}}>
                                <li>
                                    Request access
                                </li>
                                <li>
                                    Request rectification
                                </li>
                                <li>
                                    Request deletion
                                </li>
                                <li>
                                    Request data portability
                                </li>
                                <li>
                                    Request to opt out from receiving email newsletters, alerts or other marketing emails
                                </li>
                            </ul>
                        </p>
                        <br></br>
                        <p>
                            Upon receiving your request, we will make every effort to fulfil your request; if it is not otherwise required to be treated differently by law or for legitimate business purposes. You must identify yourself prior to making a request; we may not be able to process your request if it is deemed unreasonable or inappropriate.
                        </p>
                        <br></br>
                        <p>
                            We will respond to your queries within a reasonable timeframe. Please note that we may need to maintain residual copies even after your information gets deleted from the active environment (e.g., backup copies or to ensure we don’t contact you if you have opted out).
                        </p>
                        <br></br>
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl pb-4">Legal Notice</h2>
                    <p className="text-[#999999] pb-4" content="html">
                        <p>
                            Easenode may need to disclose personal information to legal authorities for compliance, fraud investigation, statutory purposes or for other legal activities as per the local laws and government request.
                        </p>
                        <br></br>
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl pb-4">Changes to this privacy statement</h2>
                    <p className="text-[#999999] pb-4" content="html">
                        <p>
                            We reserve the right to update this privacy notice at any time, and we will provide you with a new privacy notice when we make any substantial updates. We may also notify you in other ways from time to time about the processing of your personal data.
                        </p>
                        <br></br>
                    </p>
                </div>
                <div>
                    <h3 className="text-l pb-4">© 2023 Easenode Tech Pvt. Ltd. All rights reserved.</h3>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy;