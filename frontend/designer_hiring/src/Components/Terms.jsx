import React from "react";
import "../Styles/terms.css";

function Terms() {
  return (
    <>
      <div className="tdiv1">
        <h1 className="th1">Terms And Services</h1>
        <h4 className="th4">Effective Date: October 15, 2023</h4>
        <h4 className="th4">Last Updated Date: January 19, 2024</h4>
      </div>
      <div className="content">
        <p className="tcnt">
          PLEASE READ THIS TERMS OF SERVICE AGREEMENT (THE “TERMS OF SERVICE”)
          CAREFULLY. THIS TERMS OF SERVICE, APPLIES TO (A) THE WEBSITE MADE
          AVAILABLE BY DESIGNER HIRING, INC. AVAILABLE AT(THE “WEBSITE”),MOBILE
          APPLICATION(S) (EACH, AN “APPLICATION” AND COLLECTIVELY, WITH THE
          WEBSITE, THE “PLATFORM”), AND (C) THE PRODUCTS, SERVICES, FEATURES,
          TECHNOLOGIES, AND/OR FUNCTIONALITIES PROVIDED BY DESIGNER HIRING VIA
          THE PLATFORM (COLLECTIVELY, WITH THE PLATFORM, THE “SERVICES”).
        </p>
        <h2 className="th2">1. User Content License</h2>
        <p className="tp">
          Users retain ownership of their content, but they grant the platform a
          non-exclusive, sublicensable, irrevocable, and royalty-free worldwide
          license to use their content in various ways. This includes
          reproducing, displaying, distributing, modifying, and creating
          derivative works from the content.
        </p>
        <h2 className="th2">2. Platform's Role and Responsibilities</h2>
        <p className="tp">
          The platform acts as a forum for the distribution and publication of
          user-generated content but does not guarantee that all content will be
          available on the website. The platform reserves the right to take
          appropriate actions regarding user content, such as removing or
          modifying it.
        </p>
        <h2 className="th2">3. Content Approval</h2>
        <p className="tp">
          The platform has the authority to approve, reject, or modify
          user-generated content at its sole discretion.
        </p>
        <h2 className="th2">4. User Representations and Warranties</h2>
        <p className="tp">
          Users must ensure that their content: Does not infringe upon any
          intellectual property rights or other proprietary rights of others.
          Does not violate any laws or regulations. Is not defamatory, obscene,
          or harmful. Does not contain content related to harmful or illegal
          activities, including the development of weapons or terrorist-related
          content. Contains accurate and complete information and does not
          include viruses or malicious programming routines.
        </p>
        <h2 className="th2">5. Personal Information</h2>
        <p className="tp">
          The platform may transfer personal information to related entities and
          may transfer information outside of specific regions (e.g., Australia
          or the EEC-area). Withdrawing consent for such data transfers may
          result in the inability to access the website and related services
        </p>
        <h2 className="th2">6. General Information Disclaimer</h2>
        <p className="tp">
          Information on the website, including legal, financial, and health
          information, is general and not a substitute for professional advice.
          Users should consult professional advisers for specific concerns.
        </p>
        <h2 className="th2">7. Third-Party Content and Links</h2>
        <p className="tp">
          The platform provides access to third-party content, including user
          feedback and external articles, but it disclaims liability related to
          this content. Users access such content at their own risk. The
          platform may contain links to third-party websites, but it does not
          control or endorse the content, products, or services on these
          external sites. Users interact with them at their own risk.
        </p>
        <h2 className="th2">8. Deletion and Retention of Information</h2>
        <p className="tp">
          {" "}
          Deleting or hiding information on the website does not guarantee
          permanent deletion, as the platform may retain data for various
          purposes, including compliance, legal obligations, and record-keeping.
        </p>
      </div>
    </>
  );
}

export default Terms;
