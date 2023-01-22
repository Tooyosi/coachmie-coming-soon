import React from 'react'
import { Table } from 'reactstrap'
import Icofont from 'react-icofont';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Privacy = () => {
    return (
        <>
            <Header />
            <div className="hero">
                <div className="board">
                    <div className="text-center">
                        <h3 className="g-6 c-pr-blue">Privacy Policy</h3>
                        <h1 className="g-6">
                            How coachmie handles your data
                        </h1>
                        <p className="increased c-grey pt-4 mb-0">Last Updated on January {new Date().getUTCFullYear()}</p>
                    </div>
                </div>
            </div>


            <div className="py-5">
                <div className="w90 max110">
                    <div className="w100 max1100 py-3">
                        <p className='c-purple-grey'>
                            [Coachmie, Inc] (the “Company”) is a technology company that builds infrastructure for the internet community. The infrastructure connects learners globally to tech and research experts offering an array of professional knowledge-based services including but not limited to coaching, training, consulting, organisational development, change management or program management services. In its everyday business operations [Coachmie, Inc] (the “Company”) processes a variety of data about identifiable individuals in the following ways:
                        </p>
                        <ul className='c-purple-grey pl-3'>
                            {["We collect personal information from subscribers to our platform", "Visitors to our websites who willingly provide their personal data", "Current, past and prospective employee’s personal data", "Other stakeholders"].map((val, i) => (
                                <li key={i}>{val}</li>
                            ))}
                        </ul>
                        <p className='c-purple-grey'>
                            In processing and storing this data, we are subject to a variety of legislations controlling how such activities may be carried out and the safeguards that must be put in place to protect it.
                        </p>
                        <p className='c-purple-grey'>
                            This privacy notice describes how [Coachmie, Inc] (the “Company”) collects, uses, stores, and shares the personal information you provide to us or that we collect when you subscribe to our services as an expert or learner through our website located at <a href=' https://coachmie.com/'> https://coachmie.com/</a> or our mobile applications or when you visit our website.  The term “we”, “us” and “our” refers to the Company. “You” refers to you, as a user of our site or our services.

                        </p>
                        <h5 className="c-purple-grey">1.  Policy Overview</h5>
                        <p className="c-purple-grey">
                            [Coachmie, Inc] (the “Company”) is committed to preserving the confidentiality, integrity and availability of all the physical and electronic information and information-related assets relevant to meet the purpose and goals of the organisation. This includes the handling of personal data or “Personally Identifiable Information” (PII) of our subscribers and other stakeholders.

                            <br /><br />
                            Our privacy policy is adapted to best practices in PII protection considering the nature of our business and notable data protection legislations or regulations around the world and those that are relevant to our business operations.  Our privacy framework is built around the following regulations: Nigeria Data Protection regulation 2019 (NDPR), the European Union General Data Protection Regulation (GDPR) and the UK Data Protection Act (DPA) 1998 and the Data Protection, Privacy and Electronic Communications (Amendments etc) (EU Exit) Regulations 2019, the Australian Privacy Principles (APP), Canada’s Personal Information Protection and Electronic Document Act (PIPEDA).  Although the above have been listed as the regulations around which our privacy framework has been built, we are structured to comply with any privacy regulation due to the expansive nature of our approach.

                        </p>
                        <h5 className="c-purple-grey mt-5">2. Information We Collect</h5>
                        <p className="c-purple-grey">
                            When you subscribe to our services as one of the underlisted clients, you provide personal information necessary to offer the requested service as appropriate:

                            <br /><br />

                            <ul className='c-purple-grey pl-3'>
                                {["Expert", "Learner"].map((val, i) => (
                                    <li key={i}>{val}</li>
                                ))}
                            </ul>
                            <br /><br />
                            Personal information refers to unique data that can be used to identify you directly or indirectly as a natural person.  Personal data we collect, store and process for the purpose of rendering our services is dependent on the category of service and subscribers.  In addition, we may use analytical tools to automatically collect certain information about your device such as IP addresses, your site activities, and your location for the purpose of complying with privacy regulations in your jurisdiction and personalising your experience when you visit our websites.  The table below shows the detailed information we collect per category.
                            <Table responsive className='mt-3'>
                                <thead>
                                    {["Personal Information", "Expert", "Learner"].map((header, i) => (
                                        <th key={i}>{header}</th>
                                    ))}
                                </thead>
                                <tbody>
                                    {[{
                                        name: "First Name",
                                        expert: true,
                                        learners: true,
                                    }, {
                                        name: "Last Name",
                                        expert: true,
                                        learners: true,
                                    }, {
                                        name: "Email Address",
                                        expert: true,
                                        learners: true,
                                    }, {
                                        name: "Date of Birth",
                                        expert: true,
                                        learners: true,
                                    }, {
                                        name: "Gender",
                                        expert: true,
                                        learners: true,
                                    }, {
                                        name: "Phone Number",
                                        expert: true,
                                        learners: true,
                                    }, {
                                        name: "Nationality",
                                        expert: true,
                                        learners: true,
                                    }, {
                                        name: "Contact Address",
                                        expert: true,
                                        learners: true,
                                    }, {
                                        name: "Organisation Name",
                                        expert: true,
                                        learners: false,
                                    }, {
                                        name: "Professional Designation",
                                        expert: true,
                                        learners: false,
                                    }, {
                                        name: "Linkedin URL",
                                        expert: true,
                                        learners: false,
                                    }, {
                                        name: "Social media handles",
                                        expert: true,
                                        learners: true,
                                    }, {
                                        name: "City and county of residence",
                                        expert: true,
                                        learners: true,
                                    }, {
                                        name: "Bank account number",
                                        expert: true,
                                        learners: true,
                                    }, {
                                        name: "Picture",
                                        expert: true,
                                        learners: true,
                                    }, {
                                        name: "Video",
                                        expert: true,
                                        learners: true,
                                    }].map((body, i) => (
                                        <tr key={i}>
                                            <td>{body.name}</td>
                                            <td>
                                                <Icofont icon={`${body.expert ? "ui-check" : "ui-close"}`} className={`ml-auto cursor-pointer`} />
                                            </td>
                                            <td>
                                                <Icofont icon={`${body.learners ? "ui-check" : "ui-close"}`} className={`ml-auto cursor-pointer`} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </p>
                        <h5 className="c-purple-grey mt-5">3. Why We Collect Your Information and How We Use It</h5>
                        <p className="c-purple-grey">
                            We use the information you provide to offer services to you, determine the appropriate location to store your information in order to comply with legislative requirements.  We also collect your information to personalise your experience with us.   We will only use your information for the purpose we have stated above and as disclosed in this privacy notice or at the point of providing the information to us.  Any further use of the information you provided when subscribing to our service beyond what is stated at the point of subscription and in this privacy notice shall require your consent.

                        </p>
                        <ul className='c-purple-grey no-style pl-3'>
                            {["<b>Service subscription</b>: We require your personal information to provide appropriate service as requested on our portal.  The personal information provided is used to process a background check for experts to confirm their suitability and competence.",
                                "<b>Payment</b>: We require your bank account information solely for processing payment to our experts and to process refunds where applicable to other subscribers.  We do not collect or store payment card information.   When you want to make payment to us, we will redirect you to our partner payment processor who operates a secure payment gateway.  The processor has been carefully selected after a risk assessment and demonstrating a track record of implementing the safest payment security practices in line with industry standards such as the Payment Card Industry Data Security Standard (PCIDSS).",
                                "<b>Advertising</b>: We collect video recordings of experts for advertising purposes.  The advertisement is to inform the public of your expertise and showcase what you can offer.   We will post the videos on social media platforms, our website at <a href=' https://coachmie.com/'> https://coachmie.com/</a> and other related websites we own.  Videos of highest-ranking experts based on users’ reviews and other metrics will be used for this purpose.",
                                "<b>Publications</b>: Articles written by high impact experts will be shared on various websites and social media platforms for the purpose of promoting their work and proficiencies. These articles may contain personal information such as name, designation and organisation.",
                                "<b>Communication</b>: We collect your contact information to maintain our communication with you and provide valuable information about our services, marketing, your anniversaries and other benefits.  We use your email address for this purpose.  We will provide an opt-out option if you do not want to receive marketing communication from us.",
                                "<b>Teaching /Consulting</b>: Video sessions between the experts and the subscribers is a property of [Coachmie, Inc] (the “Company”) and will not be shared with any of the parties involved. The session videos will be archived immediately after the session is completed. Archived sessions may be made available on legal grounds or for any other similar purposes as determined by [Coachmie, Inc] (the “Company”).",
                            ].map((val, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: `3.${i + 1} ${val}` }}></li>
                            ))}
                        </ul>
                        <h5 className="c-purple-grey mt-5">4. Information Sharing</h5>
                        <ul className='c-purple-grey no-style pl-3'>
                            {["<b>Bank Account information</b>: We share your bank account information with our payment processor partner through a secure application programming interface (API).  We do not collect or share bank log-in credentials, debit or credit card information.  Information we collect about your bank is limited to what is necessary to process payment or refund to you.",
                                "<b>Teaching/Consulting Sessions</b>: The video recording of a coaching or consulting session is processed on a third-party secure video conferencing platform.  The third-party processor does not have direct access to your information unless required for legislative or legal compliance.   All consulting sessions are recorded and archived.  They are made available to parties involved in the recording in line with contractual agreements and the type of services subscription.",
                                "<b>Advertisement</b>: Video recordings provided by high-impact experts or consultants will be shared on our social media channels and websites to showcase the expertise of the experts as an incentive.  Articles written by these categories of experts will also be shared on the various social media channels and websites.",
                            ].map((val, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: `4.${i + 1} ${val}` }}></li>
                            ))}
                        </ul>
                        <h5 className="c-purple-grey mt-5">5.Storage</h5>
                        <p className="c-purple-grey">The personal information you provide to us is securely stored in a cloud infrastructure provided by Amazon Web Service (AWS). </p>
                        <ul className='c-purple-grey no-style pl-3'>
                            {["<b>Location of storage</b>: We will store your information in the cloud infrastructure closest to your location.  We collect information about your location when you access our website to subscribe to our service.  We recognise and comply with all cross-border legislation on information storage.  For example, users of our services located in the European Economic Area, United Kingdom and/or Switzerland will have their information stored on the cloud in the respective locations as stated in various applicable legislations.",
                                "<b>Length of storage</b>: We will store your personal information for as long you are an active subscriber to our services.  You are in control of your personal information.  You can amend, delete or request to delete your information at any time.  We will process a deactivation request within 24 hours of receipt.",
                            ].map((val, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: `5.${i + 1} ${val}` }}></li>
                            ))}
                        </ul>
                        <h5 className="c-purple-grey mt-5">6. Children and Minor</h5>
                        <p className="c-purple-grey">We do not knowingly collect personal information data from persons under the age of 18. If you are a parent of a child under 18, and you believe that your child has provided us with information about himself or herself, please contact us via the information in the contact section below.</p>
                        <h5 className="c-purple-grey mt-5">7. Elements of Privacy Policy</h5>
                        <p className="c-purple-grey">We are compliant to major privacy regulations around the world including the UK-GDPR, EU-GDPR</p>
                        <ul className='c-purple-grey no-style pl-3'>
                            {["<b>Privacy Notice – transparency of data protection</b>: We are committed to transparent processing of personal data.   We do not modify the data we collect in any way.  We are committed to the confidentiality, integrity and availability of personal data stored and processed in our system.",
                                "<b>Conditions for processing</b>: When we collect personal data, such as subscriber’s data, we will ensure the use of such data is justified and documented. All staff who are responsible for processing such personal data will be aware of the conditions for processing. The conditions for processing will be available to our clients in the service agreements.",
                                "<b>Justification for personal data</b>: We will process personal data in compliance with applicable data protection principles.  We will ensure that personal data is collected and processed in accordance with specific, legitimate and lawful purposes with full consent of the data subject.",
                            ].map((val, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: `7.${i + 1} ${val}` }}></li>
                            ))}
                            <li>7.4 <b>Fair and lawful processing</b>: We shall process personal data fairly and lawfully in accordance with regulations relevant to our business operations and in the best interest of our clients.The processing of all personal data will be:
                                <ul className='c-purple-grey pl-3'>
                                    <li>Necessary to deliver our services</li>
                                    <li>In our legitimate interests and not unduly prejudice the individual's privacy</li>
                                    <li>In most cases this provision will apply to routine business data processing activities.</li>
                                </ul>
                            </li>
                            {["<b>Consent</b>: This will be clearly stated in the enrolment process where the data subject will consent to the processing and sharing of their personal information.  We will inform the data subject of the purpose of collection and use of their information.  A subscriber will not be able to use our platform if they do not give consent to process or share their information in line with legal and lawful provisions.",
                                "<b>Accuracy</b>: We will ensure that any personal data we process is stored and retrieved accurately. We will only process or use any personal data obtained for the purpose it was collected.  Usage for any unconnected purpose will not be entertained unless the individual concerned has agreed to this or would otherwise reasonably expect secondary usage of their personal data. Individuals who have submitted inaccurate data would have unrestricted access to their data for correction.  Where a data subject believes that information about them is inaccurate, they will be able to update the information themselves by accessing their profiles.",
                                "<b>Data Portability</b>: Upon request, a data subject should have the right to receive a copy of their data in a structured format, for any reason including the transfer to another system.",
                                "<b>Right to request information removal</b>: A data subject may request that any information held on them be deleted or removed, and any third parties who process or use that data must also comply with the request. An erasure request can only be refused if an exemption applies.",
                            ].map((val, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: `7.${i + 5} ${val}` }}></li>
                            ))}

                            <li>7.9 <b>Privacy by design and default</b>: Privacy by design is an approach to projects that promote privacy and data protection compliance from the start. We conduct Privacy Impact Assessments (PIA) and ensure that all new information technology and other relevant projects commence with a privacy plan.   The privacy impact assessment will include:
                                <ul className='c-purple-grey pl-3'>
                                    <li>Consideration of how personal data will be processed and for what purposes</li>
                                    <li>Assessment of whether the proposed processing of personal data is both necessary and proportionate to the purpose(s)</li>
                                    <li>Assessment of the risks to individuals in processing the personal data</li>
                                    <li>The controls are necessary to address the identified risks and demonstrate compliance with relevant legislations</li>
                                </ul>
                            </li>
                            {["<b>Data security</b>: We are committed to keeping personal data secure against loss or misuse. We have a documented Information Security Policy and a set of subordinate security policies and controls relating to our management of data and information security.",
                                "<b>Breach Notification</b>: We are committed to protecting all information assets, However, in the unfortunate incidence of a breach in personal data security, our policy is to be fair and proportionate when considering the actions to be taken to inform affected parties or regulatory authorities.",
                                "<b>Data retention</b>: We must not retain personal data for longer than is necessary. What is “necessary” will depend on the circumstances of each case, considering the reasons that the personal data was obtained, but should be determined in a manner consistent with our data retention guidelines.  Usually, personal data of users will be retained for as long as they remain active on our platforms.",
                                "<b>Data audit and register</b>: Regular data audits to manage and mitigate risks will inform the data register. This contains information on what data is held, where it is stored, how it is used, who is responsible and any further regulations or retention timescales that may be relevant.",
                                "<b>Registration with the Information Commissioner’s Office (IC0)</b>: We are committed to regulatory compliance and are registered with the ICO.  Details of our registration are available to the public and can be verified on the ICO website. Our registration number is available upon request sent to the privacy officer at <a href='mailto:privacy@coahmie.com'>privacy@coahmie.com</a>.",
                            ].map((val, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: `7.${i + 10} ${val}` }}></li>
                            ))}
                            <li>7.15 <b>Complaint to the ICO</b>: If you have any problem accessing your personal information from us or if you are concerned about how we have handled your information, wrongly stored, lost or unlawfully disclosed your information, you should notify our privacy officer immediately at <a href='mailto:privacy@coahmie.com'>privacy@coahmie.com</a> .  If the resolution is not satisfactory to you, you may register a complaint with the ICO through any of the following methods::
                                <ul className='c-purple-grey pl-3'>
                                    <li>Live Chat at <a href='https://ico.org.uk/global/contact-us/live-chat'>https://ico.org.uk/global/contact-us/live-chat</a></li>
                                    <li>Submit a complaint through the data protection complaint portal <a href='https://ico.org.uk/make-a-complaint/data-protection-complaints/'>https://ico.org.uk/make-a-complaint/data-protection-complaints/</a></li>
                                    <li>Phone call to ICO helpline on 0303 123 1113.</li>
                                </ul>
                            </li>
                        </ul>
                        <h5 className="c-purple-grey mt-5">8. Changes to Privacy Policy</h5>
                        <p className="c-purple-grey">
                            This policy will be reviewed regularly to respond to any changes in our business, its risk assessment or risk treatment plan, legislative requirements, data collection and treatment processes and at least annually.   If we make any changes that we believe may materially affect how we process your information, we will provide such notice on our website at <a href="https://join.coachmie.com/privacy">https://join.coachmie.com/privacy</a> and notify you via email.
                        </p>
                        <h5 className="c-purple-grey mt-5">9. Contact Information</h5>
                        <p className="c-purple-grey">If you have any questions or require further clarification on any section of this privacy notice, please contact our privacy officer via email at <a href='mailto:privacy@coahmie.com'>privacy@coahmie.com</a></p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Privacy