import bg from "../assets/icons/bg.png";
import backgroundimgs from "../assets/icons/backgroundimgs.png";
import Rocket from "../assets/images/Rocket.png";
import bluringimg from "../assets/images/bluringimg.svg";
import { motion } from "framer-motion";
import toparrow from "../assets/icons/toparrow.svg";
import sidearrow from "../assets/images/sidearrow.png";
import down2 from "../assets/images/down2.png";
import Downmoney from "../assets/images/Downmoney.png";
import { useEffect } from "react";

const TermAndCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <motion.div
        className="relative overflow-hidden px-4 py-14 sm:py-0 sm:px-8 md:px-16 lg:px-38 rounded-b-4xl"
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ y: -200, opacity: 0 }} // start zoomed in, invisible
        animate={{ y: 0, opacity: 1 }} // zoom out to normal + fade in
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="py-8 sm:py-16 md:py-24 lg:py-31">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mt-4 sm:mt-8 md:mt-13">
            Terms and Condition
          </p>
        </div>
        <motion.div
          className="absolute top-[-20px] sm:top-[-30px] md:top-[-40px] left-4 sm:left-8 md:ml-15 rounded-b-full w-32 sm:w-40 md:w-200 lg:w-370 pr-4 sm:pr-8 md:pr-34 py-4 sm:py-6 md:py-10"
          initial={{ y: -200, opacity: 0 }} // starts above screen
          animate={{ y: 0, opacity: 1 }} // slides down to normal position
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={toparrow} alt="" className="w-full h-auto" />
        </motion.div>

        <div className="absolute right-4 sm:right-8 md:right-[160px] lg:right-[704px] mt-[-60px] sm:mt-[-80px] md:mt-[-110px] lg:mt-[-205px]">
          <motion.img
            src={Downmoney}
            className="w-8 h-10 sm:w-12 sm:h-14 md:w-43 md:h-50 lg:w-90 lg:h-98 rotate-[120deg] shrink-0 aspect-[201.17/301.89]"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          />
        </div>

        <div className="absolute left-4 sm:left-8 md:ml-75 lg:ml-182 mt-20 sm:mt-32 md:mt-185 lg:mt-[-170px]">
          <motion.img
            className="w-6 h-8 sm:w-8 sm:h-10 md:w-30 md:h-40 lg:w-80 lg:h-78 rotate-[20deg] shrink-0 aspect-[201.17/301.89]"
            src={down2}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
        <div className="absolute right-4 sm:right-8 md:right-[-390px] lg:ml-[1140px] mt-20 sm:mt-32 md:mt-137 lg:mt-[-240px]">
          <motion.img
            src={sidearrow}
            className="mix-blend-color-dodge h-6 w-6 sm:h-8 sm:w-8 md:h-30 md:w-30 lg:h-50 lg:w-53"
            initial={{ rotate: 90, x: 200, opacity: 0 }}
            animate={{ rotate: 290, x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
        <div className="absolute right-4 sm:right-8 md:right-[-390px] lg:ml-[-120px] mt-20 sm:mt-32 md:mt-137 lg:mt-[-280px]">
          <motion.img
            src={bluringimg}
            className="mix-blend-color-dodge w-6 h-6 sm:w-8 sm:h-8 md:w-29 md:h-29 lg:w-38 lg:h-38"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        <div className="absolute right-4 sm:right-8 md:right-[-390px] lg:ml-[-200px] mt-20 sm:mt-32 md:mt-137 lg:mt-[-190px]">
          <motion.img
            src={Rocket}
            className="h-8 w-8 sm:h-12 sm:w-12 md:h-46 md:w-46 lg:h-61 lg:w-61"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
      </motion.div>
      <div>
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-50">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold my-4 sm:my-6 md:my-8 leading-tight">
            COMPREHENSIVE TERMS OF USE, PRIVACY POLICY & DATA PROTECTION POLICY
          </h2>

          <ol className="list-decimal list-inside space-y-3 sm:space-y-4">
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                INTRODUCTION
              </h3>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <li className="text-sm sm:text-base leading-relaxed">
                  This Unified Policy sets forth the Terms of Use, Privacy
                  Commitments, and Data Protection Protocols governing the
                  access to and use of the services ("Policy") provided by Reap
                  Capital ("We", "Us", or "Our" "Company" or "REAP Capital"), a
                  fintech referral platform facilitating the connection between
                  prospective borrowers and RBI-registered financial
                  institutions and lenders.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  By accessing, registering on, or otherwise using any part of
                  the services or platform operated by Reap Capital, you ("You",
                  "Your", "User" or "Client") acknowledge that You have read,
                  understood, and agreed to be bound by the terms of this
                  Unified Policy in its entirety.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  This Policy shall apply to all users of the platform,
                  including but not limited to individuals seeking financial
                  products or services, and shall govern the manner in which
                  personal data is collected, used, stored, and disclosed, along
                  with the terms under which the platform and related services
                  may be lawfully accessed and utilized.
                </li>
              </ol>
            </li>

            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                DEFINITIONS:
              </h3>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <li className="text-sm sm:text-base leading-relaxed">
                  The terms "User," "Client," "Your" or "You" (including any
                  grammatical variations thereof) shall mean and refer to any
                  natural or legal person who accesses, browses, or uses the
                  Website and/or Mobile Application and/or avails any of the
                  services provided by the Company.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  The Reap Capital shall mean and refer to, including its parent
                  company, subsidiaries, affiliates, successors, and assigns.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  The terms "Site" or "Website" shall refer to https://________
                  and any other websites, platforms, portals, or digital
                  interfaces owned, operated, managed, or otherwise controlled
                  by the Company, and shall include all content, software,
                  applications, designs, text, images, graphics, videos, audios,
                  and other components made available on or through such
                  platforms.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  The terms "Content," "Technology," and "Material" shall mean
                  and include, without limitation, all software, source code,
                  object code, databases, information, text, data, images, user
                  interfaces, visual interfaces, trademarks, logos, music, sound
                  recordings, photographs, graphics, designs, structure,
                  expression, coordination, selection, and arrangement thereof,
                  as displayed, used, or provided on the Website and/or Mobile
                  Application.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  The terms "Product" or "Services" shall mean and refer to the
                  facilitation of access to information and/or referral services
                  with respect to financial products and services, including but
                  not limited to various types of loans such as home loans,
                  personal loans, business loans, gold loans, and other related
                  financial offerings that may have been made available through
                  the Website and/or Mobile Application.
                </li>
                <li>
                  The terms “Personal Information” and “Information” shall mean
                  and include any information disclosed or provided by the User
                  to the Company in connection with the use of the Website
                  and/or Mobile Application, including sensitive personal data
                  or information, and shall be interpreted in accordance with
                  the provisions of the Information Technology Act, 2000,
                  Information Technology (Reasonable Security Practices and
                  Procedures and Sensitive Personal Data or Information) Rules,
                  2011, notifications and circulars issued by the Reserve Bank
                  of India, Telecom Regulatory Authority of India and other
                  applicable laws, rules, or regulations as amended from time to
                  time.
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                ELIGIBILITY AND USE OF THE PLATFORM
              </h3>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <li>
                  By accessing and registering on the Website and/or Mobile
                  Application operated by Reap Capital, you represent and
                  warrant that you are legally competent to enter into a binding
                  contract under the applicable laws of India and that you are
                  not a person barred from receiving Services under any law in
                  force. You further affirm that You shall use the Platform
                  solely for legitimate purposes, either for yourself or for
                  another person for whom you are legally authorized to act, and
                  in such cases, you undertake to communicate to such person(s)
                  the applicable Terms of Use and Privacy Policy of the Company.
                </li>
                <li>
                  You agree that you shall maintain only one active user
                  account, and you are expressly prohibited from selling,
                  assigning, trading, or otherwise transferring your account to
                  any other person or entity.
                </li>
                <li>
                  You undertake to provide true, accurate, current, and complete
                  information during the registration process and to maintain
                  and promptly update such information to keep it accurate and
                  complete. In the event any information is found to be false,
                  misleading, or incomplete, or if the Company has reasonable
                  grounds to believe so, Reap Capital reserves the right to
                  suspend or terminate your account and deny access to the
                  platform and services, either temporarily or permanently.
                </li>
                <li>
                  You shall be solely responsible for maintaining the
                  confidentiality of your account credentials, including Your
                  username and password, and for restricting access to Your
                  device. You agree to accept responsibility for all activities
                  that occur under your account. Reap Capital strongly
                  recommends that you log out at the end of each session and
                  immediately notify the Company of any unauthorized access or
                  use of your account or any other breach of security. The
                  Company reserves the right to refuse service, terminate
                  accounts, or modify access at its sole discretion without
                  prior notice.
                </li>
                <li>
                  Reap Capital reserves the unilateral right to deny or restrict
                  access to any User at any time, with or without cause,
                  including, but not limited to, for violations of the Terms of
                  Use or Privacy Policy.
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                USER REPRESENTATIONS AND RESPONSIBILITIES
              </h3>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <li>
                  The User hereby represents, warrants, and agrees that he/she
                  shall be solely and exclusively responsible for maintaining
                  the confidentiality, security, and proper use of his/her login
                  credentials, including the Login ID and password, which,
                  together with any mobile number, email address, or other
                  contact details provided, shall constitute the User’s
                  Registration Information.
                </li>
                <li>
                  The User acknowledges and agrees that access to the services
                  offered by Reap Capital is granted solely through the correct
                  use of such credentials, and that the responsibility to
                  safeguard, restrict, and monitor access to his/her account,
                  system, or device lies entirely with the User. The User
                  further agrees to accept full and unconditional responsibility
                  for any and all activities conducted through his/her account,
                  whether authorized or unauthorized.
                </li>
                <li>
                  The Company strongly recommends that the User logs out or
                  securely exits his/her account at the conclusion of each
                  session and exercises reasonable diligence to protect account
                  access. The User agrees to immediately notify Reap Capital in
                  the event of any known or suspected unauthorized use, security
                  breach, or compromise of the Registration Information. The
                  Company shall not be held liable for any unauthorized access
                  or use of the User’s account unless such access is
                  conclusively proven to have occurred solely due to reasons
                  directly and substantially attributable to the Company’s gross
                  negligence or willful misconduct.
                </li>
                <li>
                  The User further undertakes to provide true, accurate,
                  current, and complete information at the time of registration
                  and during the use of the platform, and to promptly update
                  such information in the event of any change. The Company shall
                  not be responsible for any deficiency in service resulting
                  from the User’s failure to maintain up-to-date and accurate
                  Registration Information.
                </li>
                <li>
                  {" "}
                  The User expressly agrees not to misrepresent his/her identity
                  or attempt to gain unlawful or unauthorized access to the
                  Website, Mobile Application, platform, systems, or services
                  offered by Reap Capital. Additional terms and conditions, as
                  may be applicable to the specific services availed by the
                  User, shall govern such transactions and form an integral part
                  of this Policy. The User is advised to carefully read and
                  understand such terms prior to the use or purchase of any
                  services.
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">ACCESS</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  You are solely responsible for procuring, at your own cost and
                  discretion, all necessary equipment, software, Internet
                  access, and services required to lawfully and effectively
                  access and use the Website/Mobile Application, including any
                  devices, browsers, or telecommunications services. If you
                  access the Website/Mobile Application through a mobile or
                  wireless device, you shall be liable for all charges levied by
                  your carrier, including but not limited to data, SMS, or other
                  wireless transmission fees. Subject to your continued
                  compliance with these terms, the Company grants you a limited,
                  non-exclusive, non-transferable, revocable license to access
                  and make personal and non-commercial use of the Website/Mobile
                  Application and the services offered therein. This license
                  strictly prohibits: (i) any downloading, reproduction,
                  copying, or storage of material for the benefit of any third
                  party; (ii) any unauthorized linking, framing, or caching of
                  content; (iii) uploading, posting, or transmitting material
                  which you do not have lawful rights to make available,
                  including but not limited to intellectual property belonging
                  to third parties; (iv) introduction or transmission of any
                  viruses, malware, or malicious code intended to interfere with
                  or impair the operation of any software, hardware, or
                  telecommunications systems; (v) using automated tools such as
                  data mining, bots, or scrapers to collect information; or (vi)
                  taking any action that, in the Company’s sole discretion,
                  imposes or is likely to impose an unreasonably high load on
                  the Website’s infrastructure. Any attempt to circumvent,
                  disable, or otherwise interfere with the security features or
                  access restrictions of the Website/Mobile Application shall
                  result in immediate revocation of the license granted.
                  Additionally, you agree not to: (a) engage in any speculative,
                  false, or fraudulent transactions; (b) access, monitor, or
                  copy any Website/Mobile Application content through automated
                  means without prior written consent from the Company; (c)
                  violate any robot exclusion protocols or bypass access
                  restriction measures; (d) replicate, mirror, or frame any
                  portion of the Website/Mobile Application on another site
                  without express written authorization. Any unauthorized use
                  shall automatically terminate your limited license without
                  notice and may result in legal action.
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">OWNERSHIP</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  The Website/ Mobile Application contains, inter alia,
                  information, applications, content or advertisements, texts,
                  photographs, designs, graphics, images, sound and video
                  recordings, animation and other Materials and effects
                  (Hereinafter collectively, referred to as the “Content“) that
                  are protected by applicable intellectual and proprietary
                  rights owned by the Company, its affiliated companies, holding
                  companies and subsidiary companies or other third parties. All
                  trademarks and copyrighted information contained on the
                  Website/ Mobile Application are the property of REAP Capital
                  or their respective owners, as the case may be. Further, the
                  Company retains all rights (including intellectual property
                  rights), title and interest in the Website/ Mobile
                  Application, technology, and all underlying technology and
                  data including, inter alia, any enhancements, software,
                  applications and improvements related to the Website/ Mobile
                  Application (the “Technology“) (the terms “Content” and
                  “Technology” collectively will be referred to as the
                  “Materials”). You may not remove from any electronic or
                  printed copy any copyright, trademark, or other proprietary
                  notice without the express written permission of the Company.
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                TERMS AND CONDITIONS
              </h3>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                  7.1 Nature of Services
                </h4>
                <li className="text-sm sm:text-base leading-relaxed">
                  Referral and Intermediary Function: Reap Capital operates
                  solely in the capacity of a Referral Agent (RA) or Direct
                  Selling Agent (DSA), and does not, at any point, function as a
                  lender or financial institution.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  No Lending Activity or Credit Decisioning: Reap Capital does
                  not, either directly or indirectly, participate in the lending
                  process or make any credit or loan sanction decisions. The
                  Company does not assume any responsibility for approving,
                  rejecting, or determining the terms of any financial products
                  or services.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  Lender Responsibility: All aspects pertaining to loan
                  eligibility assessment, document verification, sanctioning,
                  and disbursal of loan amounts are undertaken independently and
                  exclusively by our associated RBI-registered Banks and
                  Non-Banking Financial Companies (NBFCs), with whom the
                  end-user is directly engaged.
                </li>
              </ol>

              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                  7.2 CUSTOMER CONSENT & AUTHORIZATION
                </h4>
                <li className="text-sm sm:text-base leading-relaxed">
                  Consent for Data Processing and Sharing: By voluntarily
                  submitting any information, data, or documentation on the Reap
                  Capital platform, you expressly authorize and provide your
                  unequivocal consent to Reap Capital to collect, store,
                  process, and disclose such information to its partnered
                  RBI-registered financial institutions and lending partners for
                  the purposes of credit assessment, loan processing,
                  verification, risk analysis, and related due diligence
                  activities, in accordance with applicable data protection laws
                  and regulatory guidelines.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  Accuracy of Information: You represent and warrant that all
                  personal, financial, and other information submitted by you
                  through the platform is true, complete, accurate, and current
                  to the best of your knowledge. You undertake to promptly
                  notify Reap Capital of any changes or updates to such
                  information to ensure its continued accuracy and reliability.
                </li>
              </ol>
            </li>
            <li>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                  7.3 NO GUARANTEE
                </h4>
                <li>
                  No Guarantee of Approval: The submission of a loan application
                  or any associated documentation through the Reap Capital
                  platform shall not, under any circumstances, be construed as a
                  guarantee, assurance, or commitment of loan approval or
                  sanction by Reap Capital or any of its partnered financial
                  institutions.
                </li>
                <li>
                  Lender’s Sole Discretion: The final decision regarding the
                  approval, rejection, terms, and conditions of any loan
                  application shall rest solely and exclusively with the
                  respective RBI-registered financial institution or lending
                  partner, in accordance with their internal credit evaluation
                  policies, risk assessment criteria, and regulatory compliance
                  requirements. Reap Capital does not influence or interfere
                  with the lender's independent decision-making process.
                </li>
              </ol>
            </li>
            <li>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                  7.4 SERVICE USE OBLIGATIONS
                </h4>
                <li>
                  Right to Amend: Reap Capital reserves the unfettered right to
                  amend, modify, update, or revise this Unified Policy,
                  including but not limited to the Terms of Use, Privacy
                  Commitments, and Data Protection Protocols, at its sole
                  discretion and at any time, without prior notice, to ensure
                  continued compliance with legal, regulatory, or operational
                  requirements.
                </li>
                <li>
                  Deemed Acceptance: Your continued access to or use of the
                  platform or services following the publication of any such
                  amendments shall constitute Your express acknowledgment and
                  acceptance of the revised Policy. It is Your sole
                  responsibility to periodically review the Policy to stay
                  informed of any changes.
                </li>
              </ol>
            </li>
            <li>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                  7.6 GOVERNING LAW AND JURISDICTION
                </h4>
                <li>
                  This Policy shall be governed by and construed in accordance
                  with the laws of India, and the rights and obligations of the
                  Parties shall be interpreted and enforced in accordance
                  therewith; any dispute, claim, or controversy arising out of
                  or in connection with this Policy, including its validity,
                  construction, performance, or breach, shall be referred to and
                  finally resolved by arbitration in accordance with the
                  Arbitration and Conciliation Act, 1996, as amended from time
                  to time. The decision and award of the arbitral tribunal shall
                  be final, conclusive, and binding on the Parties. The seat and
                  venue of the arbitration shall be Bangalore, Karnataka, India,
                  and the proceedings shall be conducted in the English
                  language. Notwithstanding the foregoing, nothing herein shall
                  preclude either Party from seeking interim relief or equitable
                  remedies, including injunctive relief, from a court of
                  competent jurisdiction in Bangalore, Karnataka, solely for the
                  purpose of maintaining status quo or protecting the subject
                  matter of the dispute pending arbitration. The User further
                  agrees and acknowledges that any dispute arising out of any
                  transaction involving products or services displayed on the
                  Website or Mobile Application, but not directly offered by the
                  Company, shall be resolved exclusively between the User and
                  the relevant third-party vendor or service provider, and the
                  Company shall not be liable or responsible in any manner
                  whatsoever for such third-party dealings.
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                AUTOMATED ACCESS AND ACTIVITY
              </h3>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <li>
                  Reap Capital may implement robot exclusion protocols, such as
                  robots.txt files or HTML meta tags, to control and restrict
                  access to certain portions of the Website or Mobile
                  Application. You agree not to use any automated tools,
                  including but not limited to robots, spiders, scrapers, or
                  other data extraction technologies, to access, retrieve, or
                  index content from the platform for any purpose, unless
                  expressly permitted in writing by the Company.
                </li>
                <li>
                  You further agree not to circumvent or interfere with the
                  Company’s robot exclusion mechanisms, firewalls, or other
                  security measures implemented to prevent unauthorized access
                  to or manipulation of the Website or Mobile Application.
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                THIRD-PARTY LINKS AND ADVERTISEMENTS
              </h3>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <li>
                  The Website and/or Mobile Application may contain links to
                  external websites, platforms, or resources maintained by third
                  parties. Reap Capital does not control or endorse the content,
                  offerings, or practices of any such third-party platforms and
                  shall not be held responsible or liable for their
                  availability, accuracy, legality, or any resulting loss,
                  injury, or damages.
                </li>
                <li>
                  Any interaction, transaction, or reliance upon third-party
                  links, advertisements, or service providers accessed through
                  the Reap Capital platform is done entirely at your own risk.
                  Reap Capital shall not be liable for any acts, omissions,
                  representations, warranties, errors, or negligence of such
                  third parties or for any resulting damage to person, property,
                  or data. Users are strongly advised to conduct their own due
                  diligence prior to engaging with any third-party advertisers
                  or service providers.
                </li>
                <li>
                  Users acknowledge and understand that certain advertisements
                  appearing on the platform are delivered by independent third
                  parties, and that user data may be shared with such
                  advertisers only upon user selection or interaction with the
                  advertisement. Reap Capital disclaims all liability, without
                  exception, for any outcomes, losses, or disputes arising out
                  of such third-party engagements.
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                PRIVACY POLICY
              </h3>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <li>
                  Data Collection-: Reap Capital, in the course of providing its
                  Services, may collect and process various categories of data
                  and information from users, including but not limited to:
                  <ul>
                    <li>
                      Personal Information: Such as full name, contact number,
                      email address, residential address, date of birth, and
                      other identifying details;
                    </li>
                    <li>
                      Know Your Customer (KYC) Information: Including Permanent
                      Account Number (PAN), Aadhaar Number, Voter Identification
                      Number, and other government-issued identity documents as
                      may be required for regulatory compliance;
                    </li>
                    <li>
                      Financial Information: Including bank account details,
                      bank statements, income tax returns (ITRs), credit reports
                      or credit score, and other income-related documents
                      necessary for loan facilitation;
                    </li>
                    <li>
                      Business Information (applicable to MSME applicants):
                      Including name of the business entity, Goods and Services
                      Tax Identification Number (GSTIN), business income data,
                      and related financial disclosures;
                    </li>
                    <li>
                      Device and Usage Information: Such as Internet Protocol
                      (IP) address, geographic location, browser data, and
                      cookies or similar tracking technologies (where
                      applicable), to enhance platform functionality and
                      security.
                    </li>
                    <h4>
                      All such data shall be collected, stored, and processed in
                      accordance with applicable data protection laws and solely
                      for the legitimate purpose of facilitating services
                      offered through the Reap Capital’s Platform.
                    </h4>
                  </ul>
                </li>
                <li>
                  PURPOSE OF DATA USAGE:- The data and information collected by
                  Reap Capital shall be used solely for lawful and legitimate
                  purposes in connection with the services offered on its
                  platform. Such purposes include, but are not limited to:
                  <ul>
                    <li>
                      Evaluation of Loan Eligibility and Documentation:
                      Assessing the User's financial profile and supporting
                      documentation to determine preliminary eligibility for
                      financial products;
                    </li>
                    <li>
                      Sharing with Financial Partners: Disclosing relevant
                      information to RBI-registered financial institutions and
                      lending partners for the purpose of conducting independent
                      verifications, creditworthiness assessments, and
                      background checks;
                    </li>
                    <li>
                      Customer Support and Service Enhancement: Facilitating
                      effective communication, resolving user queries, and
                      improving the overall quality, performance, and user
                      experience of the platform and its Services;
                    </li>
                    <li>
                      Regulatory and Legal Compliance: Ensuring adherence to
                      applicable laws, rules, regulations, and directives issued
                      by regulatory authorities, including obligations under
                      KYC, AML, and data protection frameworks.
                    </li>
                    <h4>
                      All processing of personal and financial data shall be
                      carried out in accordance with applicable legal standards
                      and only to the extent necessary to fulfill the stated
                      purposes.
                    </h4>
                  </ul>
                </li>
                <li>
                  LEGAL BASIS FOR DATA PROCESSING: - Reap Capital processes
                  personal, financial, and related data in accordance with
                  applicable data protection laws and regulations, based on the
                  following lawful grounds:
                  <ul>
                    <li>
                      Explicit User Consent: Processing activities are carried
                      out upon obtaining the informed, voluntary, and
                      unambiguous consent of the user, particularly in relation
                      to data collection, sharing with third-party financial
                      partners, and communications.
                    </li>
                    <li>
                      Legitimate Business Interests: Data may be processed where
                      necessary for the legitimate interests of Reap Capital,
                      including but not limited to platform functionality,
                      operational efficiency, service delivery, risk management,
                      fraud prevention, and enhancement of user
                      experience—provided such interests do not override the
                      fundamental rights and freedoms of the data subject;
                    </li>
                    <li>
                      Compliance with Legal and Regulatory Obligations:
                      Processing is undertaken to fulfill obligations mandated
                      under applicable laws, regulations, and directives,
                      including but not limited to Know Your Customer (KYC),
                      Anti-Money Laundering (AML), tax compliance, and lawful
                      requests from government or regulatory authorities.
                    </li>
                    <h4>
                      All data processing activities shall be strictly limited
                      to the purposes for which the data was collected and shall
                      be conducted with due regard to user rights and data
                      security standards.
                    </h4>
                  </ul>
                </li>
                <li>
                  DATA SHARING & DISCLOSURE: - Reap Capital is committed to
                  ensuring confidentiality and responsible handling of User
                  data. Accordingly, data collected through the Platform shall
                  be shared and disclosed strictly under the following
                  conditions:
                  <ul>
                    <li>
                      Permitted Financial Partners: User data may be shared only
                      with RBI-registered Banks, Non-Banking Financial Companies
                      (NBFCs), and verified lending partners for the limited
                      purpose of loan processing, credit evaluation, and related
                      financial services;
                    </li>
                    <li>
                      No Commercial Sale or Marketing Disclosure: Reap Capital
                      does not sell, rent, or otherwise share any personal or
                      financial data with third parties for marketing,
                      promotional, or unsolicited communication purposes;
                    </li>
                    <li>
                      Regulatory or Legal Compliance: Data may be disclosed to
                      governmental authorities, law enforcement agencies,
                      regulatory bodies, or other authorized entities only as
                      required under applicable laws, regulations, or pursuant
                      to judicial or administrative orders, including compliance
                      with KYC, AML, and other statutory obligations.
                    </li>
                  </ul>
                </li>
                <li>
                  DATA RETENTION
                  <ul>
                    <li>
                      User data collected and processed by Reap Capital shall be
                      retained only for as long as is necessary to fulfill the
                      purposes for which it was collected, or as may be mandated
                      under applicable laws and regulatory guidelines, including
                      but not limited to the Prevention of Money Laundering Act,
                      2002 (PMLA) and directives issued by the Reserve Bank of
                      India (RBI).
                    </li>
                    <li>
                      Upon the completion of the loan lifecycle or cessation of
                      the user's relationship with Reap Capital, and upon
                      receipt of a written request from the user, Reap Capital
                      may, at its discretion, delete or anonymize such data,
                      provided that such deletion does not conflict with any
                      prevailing legal, regulatory, or contractual retention
                      obligations to which Reap Capital is subject.
                    </li>
                  </ul>
                </li>
                <li>
                  USER RIGHTS IN RELATION TO PERSONAL DATA: Subject to
                  applicable laws and regulatory requirements, users of the Reap
                  Capital platform are entitled to exercise the following rights
                  with respect to their personal data:
                  <ul>
                    <li>
                      Right to Access: You have the right to request and obtain
                      access to the personal data held by Reap Capital about
                      You, including the purposes for which it is being
                      processed and the categories of recipients with whom such
                      data may be shared.
                    </li>
                    <li>
                      Right to Rectification: You have the right to request
                      correction or rectification of any inaccurate, incomplete,
                      or outdated personal information maintained by Reap
                      Capital.
                    </li>
                    <li>
                      Right to Withdraw Consent: Where processing is based on
                      Your consent, You have the right to withdraw such consent
                      at any time. Such withdrawal shall not affect the
                      lawfulness of processing based on consent prior to its
                      withdrawal.
                    </li>
                    <li>
                      Right to Data Portability: You may request to receive Your
                      personal data in a structured, commonly used, and
                      machine-readable format, and, where technically feasible,
                      request its transmission to another data controller.
                    </li>
                    <li>
                      Right to Erasure: You have the right to request the
                      erasure of your personal data from Reap Capital’s systems,
                      provided that such deletion does not conflict with
                      statutory retention obligations or other legal and
                      regulatory requirements to which Reap Capital is subject.
                    </li>
                  </ul>
                </li>
                <li>
                  GRIEVANCE REDRESSAL
                  <h4>
                    In the event of any concerns, complaints, or grievances
                    relating to the processing of your personal data, usage of
                    the platform, or any aspect of this Policy, you may contact
                    our Grievance Redressal Officer at the following details:
                    Email: grievance@reapcapital.in
                  </h4>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                DATA PROTECTION POLICY
              </h3>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <li>
                  REGULATORY COMPLIANCE
                  <h4>Our policies comply with:</h4>
                  <ul>
                    <li>Information Technology Act, 2000</li>
                    <li>RBI Guidelines (as amended from time to time)</li>
                    <li>TRAI TCCCPR-2018</li>
                    <li>RBI’s January 2025 Mobile Number Fraud Guidelines</li>
                  </ul>
                </li>
                <li>
                  DATA SECURITY MEASURES
                  <ul>
                    <li>End-to-end encryption (TLS/SSL)</li>
                    <li>Firewall protection</li>
                    <li>Periodic security audits</li>
                    <li>Role-based access controls</li>
                    <li>Data minimization and storage limitation</li>
                    <li>Breach notification mechanism</li>
                  </ul>
                </li>
                <li>
                  DEVICE PERMISSIONS
                  <ul>
                    <li>
                      No access is taken to your contacts, gallery, or location
                      unless explicitly required and consented to (e.g., for KYC
                      verification).
                    </li>
                  </ul>
                </li>
                <li>
                  DATA LOCALIZATION
                  <ul>
                    <li>
                      All User data is stored on servers located in India as per
                      regulatory mandates.
                    </li>
                  </ul>
                </li>
                <li>
                  OUTSOURCING & VENDOR MANAGEMENT
                  <ul>
                    <li>
                      All third-party vendors (including DSAs and loan
                      management platforms) must sign Data Processing Agreements
                      (DPAs) in accordance with RBI guidelines.
                    </li>
                    <li>
                      Vendors are subject to periodic audits and must report
                      breaches.
                    </li>
                  </ul>
                  <li>
                    MOBILE NUMBER & FRAUD PREVENTION
                    <ul>
                      <li>
                        We verify registered mobile numbers using the Mobile
                        Number Revocation List (MNRL) and other systems.
                      </li>
                      <li>
                        Communication with customers will be via registered
                        headers, 140/160 series, or official DLT-registered
                        channels only.
                      </li>
                      <li>No 10-digit promotional calls will be made.</li>
                    </ul>
                  </li>
                  <li>
                    BREACH PROTOCOL
                    <h4>In case of breach:</h4>
                    <ul>
                      <li>
                        Notification to affected individuals within 72 hours.
                      </li>
                      <li>
                        Filing with RBI, CERT-In, and other statutory bodies as
                        needed.
                      </li>
                      <li>Immediate remedial action initiated.</li>
                    </ul>
                  </li>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                CONSENT MECHANISM & OPT-OUT: -{" "}
              </h3>
              <h4>
                Reap Capital adopts a Digital Consent Acquisition (DCA)
                framework that is fully compliant with the applicable norms
                prescribed by the Telecom Regulatory Authority of India (TRAI)
                and Distributed Ledger Technology (DLT) regulations, ensuring
                that all user consents for communication and data processing are
                transparently recorded and verifiable.
              </h4>
              <h4>
                Users reserve the right to withdraw previously granted consent
                or opt out of non-essential communications or data processing
                activities by either of the following means:
              </h4>
              <ul>
                <li>
                  Sending a written request via email to-:
                  privacy@reapcapital.in; or
                </li>
                <li>
                  Submitting a request through the user’s dedicated dashboard or
                  account interface on the Reap Capital platform, where
                  available.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                WARRANTY, LIMITATION OF LIABILITY, AND INDEMNIFICATION
              </h3>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <li>
                  The content, documentation, graphics, software, products, and
                  services available on this Website and/or Mobile Application
                  (“Platform”) may contain inaccuracies, including typographical
                  or technical errors such as pricing discrepancies, for which
                  the Company disclaims any liability. The Company reserves the
                  right to correct, modify, or update such information at its
                  sole discretion without prior notice. All content and services
                  are provided on an "as is" and "as available" basis without
                  warranties of any kind, either express or implied, including
                  but not limited to warranties of merchantability, fitness for
                  a particular purpose, title, non-infringement, or arising from
                  a course of dealing or usage of trade. The Company does not
                  warrant that the Platform, its servers, or emails sent are
                  free of viruses or other harmful components. The Company
                  expressly disclaims any endorsement or responsibility for
                  products or services offered by third-party service providers,
                  who act as independent entities and are not agents or
                  employees of the Company. The Company shall not be liable for
                  any acts, errors, omissions, representations, negligence, or
                  misconduct of such third parties, nor for any resulting loss,
                  injury, delay, damage, expense, or force majeure event. Under
                  no circumstances shall the Company or its affiliates be liable
                  for any direct, indirect, incidental, special, punitive, or
                  consequential damages arising out of or related to your access
                  to or use of the Platform, even if the Company has been
                  advised of the possibility of such damages. You hereby agree
                  to indemnify and hold harmless the Company, its affiliates,
                  officers, employees, agents, and service providers from any
                  claims, liabilities, damages, losses, or expenses, including
                  legal costs, arising out of your use of the Platform, your
                  violation of applicable laws or these Terms, or your
                  infringement of any third-party rights.
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                INDEMNITY
              </h3>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <li>
                  You hereby agree to indemnify, defend, and hold harmless the
                  Company, including its affiliates, officers, directors,
                  employees, agents, representatives, vendors, and distributors,
                  from and against any and all claims, demands, liabilities,
                  damages, losses, costs, expenses, and fees (including but not
                  limited to reasonable attorneys’ fees) arising directly or
                  indirectly from (i) your use of or access to the Website
                  and/or Mobile Application; (ii) your breach or violation of
                  any of the terms, conditions, representations, warranties, or
                  obligations under these Terms of Use or applicable laws; or
                  (iii) any third-party claims arising out of content submitted,
                  posted, transmitted, or otherwise made available by you
                  through the Website or Mobile Application. The Company
                  reserves the exclusive right, at its sole discretion and at
                  your expense, to assume the defence and control of any matter
                  that would otherwise be subject to indemnification by you, and
                  in such event, you agree to fully cooperate with the Company
                  in asserting any available defences and in the conduct of such
                  defence.
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                REASONABLE SECURITY PRACTICES AND PROCEDURES
              </h3>
              <ol className="list-decimal list-inside space-y-1 sm:space-y-2">
                <li>
                  Reap Capital has implemented and shall maintain reasonable
                  security practices and procedures to protect the personal,
                  financial, and sensitive data provided by users on its Website
                  and/or Mobile Application, in compliance with the Information
                  Technology Act, 2000 and the applicable rules thereunder,
                  including the Information Technology (Reasonable Security
                  Practices and Procedures and Sensitive Personal Data or
                  Information) Rules, 2011. These practices include appropriate
                  managerial, technical, operational, and physical safeguards
                  designed to prevent unauthorized access, disclosure,
                  alteration, or destruction of user data. However, the User
                  acknowledges and agrees that no method of transmission over
                  the internet or electronic storage is entirely secure, and the
                  Company disclaims any liability for any loss or damage
                  resulting from a data breach or unauthorized access that
                  occurs despite the Company’s adherence to applicable security
                  standards. The User further agrees to indemnify and hold
                  harmless the Company and its affiliates from any liability
                  arising from events beyond the Company’s reasonable control
                  where loss or misuse of data occurs notwithstanding the
                  exercise of due diligence and prudent measures by the Company.
                </li>
              </ol>
            </li>
            <li>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                MISCELLANEOUS
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li className="text-sm sm:text-base leading-relaxed">
                  Policy Updates: Reap Capital reserves the right to amend,
                  update, or modify this Policy at its sole discretion. All such
                  changes shall be duly published on the official website, and
                  continued use of the platform following such publication shall
                  constitute deemed acceptance of the revised terms.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  Third-Party Links: The Reap Capital platform may contain links
                  to third-party websites or services. Users are advised that
                  Reap Capital does not control or endorse the content,
                  security, or privacy practices of such external sites and
                  disclaims any liability arising from the use thereof. Users
                  are encouraged to review the respective privacy policies of
                  those third-party websites before disclosing any personal
                  information.
                </li>
                <li className="text-sm sm:text-base leading-relaxed">
                  Children's Data: The services and platform offered by Reap
                  Capital are strictly intended for use by individuals who are
                  18 years of age or older. Reap Capital does not knowingly
                  collect or process personal data from individuals below the
                  age of 18. If it is discovered that such data has been
                  collected inadvertently, appropriate steps shall be taken to
                  delete the data in accordance with applicable laws.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;
