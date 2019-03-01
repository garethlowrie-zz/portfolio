import React from "react";
import PropTypes from "prop-types";
import Job from "components/Job/Job";
import Flex from "components/Flex/Flex";
import Tags from "components/Tags/Tags";
import styles from "./index.module.less";
import compose from "recompose/compose";
import getContext from "recompose/getContext";
import branch from "recompose/branch";
import renderNothing from "recompose/renderNothing";
import renderComponent from "recompose/renderComponent";
import phone from "icons/phone.svg";
import email from "icons/email.svg";

const mobileBreakpoint860 = 860;
const mobileBreakpoint1080 = 1080;

export const EmploymentSection = ({ windowWidth }) => {
  return (
    <div className={styles.contentSection}>
      <h2>EMPLOYMENT</h2>
      <Job
        company="Hive HR"
        role="Front-end Software Engineer"
        startDate="November 2018"
        endDate="Present"
        tags={[
          "Node.js",
          "AWS (Build & Deploy)",
          "Elastic Search",
          "Graph QL",
          "React",
          "JavaScript",
          "TypeScript",
          "Agile",
          "SCRUM",
          "HTML5",
          "CSS3",
          "Redux",
          "Redux Form",
          "Recompose",
          "git",
          "Jira",
          "Bitbucket"
        ]}
      >
        <div>
          <p>
            I'm currently working with a fantastic bunch at Hive HR, working to
            build the best employee engagement platform out there.
          </p>
          <br />
          <p>
            The opportunity to flourish at Hive is great - since day one I've
            been able to get knees deep in full stack development and have built
            and released a range of exciting new features.
          </p>
          <br />
          <p>
            It's still early days here at Hive so watch this space and I'll
            update your with my accomplishments in due course.
          </p>
        </div>
      </Job>
      <Job
        company="Communicator"
        role="Front-end Developer"
        startDate="March 2018"
        endDate="November 2018"
        tags={[
          "Agile",
          "SCRUM",
          "HTML5",
          "CSS3",
          "JavaScript",
          "React",
          "TypeScript",
          "Redux",
          "Redux-saga",
          "Recompose",
          "lodash",
          "git",
          "Jira",
          "Bitbucket",
          "GitLab",
          "Octopus",
          "TeamCity"
        ]}
      >
        <div>
          <p>
            After training alongside the Product Development Team, I secured the
            position of Front-end Developer specialising in React.js and became
            part of a team of three who are responsible for maintaining and
            developing the next generation of our companies SaaS offering. I am
            one of two front-end developers working on our innovative new
            product due to go to market very shortly.
          </p>
          <br />
          <p>
            As a team we follow scrum and agile methodologies working to a
            two-week sprint cycle. To achieve this, we partake in daily
            stand-ups, and bi-weekly sprint review, planning and retrospective
            sessions.
          </p>
          <br />
          <p>
            We use Atlassian's offerings to track our progress combined with
            TeamCity and Octopus to push out updates into our production
            environments.
          </p>
        </div>
      </Job>
      <Job
        company="Communicator"
        role="Product Operations Analyst"
        startDate="January 2017"
        endDate="March 2018"
        tags={[
          "Customer Service",
          "SQL",
          "Jira Service Desk Administration",
          "Bug Fixing",
          "Confluence",
          "User Guide Creation",
          "Blog Creator",
          "5 Star Satisfaction Rating"
        ]}
      >
        <div>
          <p>
            As a Product Operations Analyst I provided exceptional technical
            support both internally and to customers.
          </p>
          <br />
          <p>
            Communicator is a feature-rich highly innovative bespoke solution,
            that’s been specifically designed to be versatile, so that each
            implementation is bespoke to the individual customer, therefore the
            technical queries that are received are not repetitive, but are as
            diverse as their customer base.
          </p>
          <br />
          <p>
            Depending upon the nature of the customer’s query, they may need
            support via email or telephone, require a demonstration, coaching,
            conference call or prefer to discuss their query face to face during
            a scheduled visit to their office or Communicator's.
          </p>
          <br />
          <p>
            A few months in I started working in the Product Development team
            part-time which gradually progressed into successfully securing a
            full-time position as a Junior Front-end Developer.
          </p>
          <br />
          <p>
            This opportunity has allowed me to develop my knowledge of the
            latest front-end technologies including but not limited to
            JavaScript, ES6 and React.js whilst exposing me to working in an
            agile and SCRUM environment.
          </p>
        </div>
      </Job>
    </div>
  );
};

export const HeaderSection = ({ windowWidth }) => {
  return (
    <div className={styles.headerSection}>
      <h1>GARETH LOWRIE</h1>
      <hr />
      <p className={styles.tagline}>
        Software Engineer in Newcastle upon Tyne, UK
      </p>
    </div>
  );
};

export const ProfessionalProfileSection = ({ windowWidth }) => {
  return (
    <div className={styles.contentSection}>
      <h2>PROFESSIONAL PROFILE</h2>
      <p className={styles.tagline}>
        I’m Gareth, an enthusiastic Software Engineer. I turn beautiful designs
        into stateful applications using HTML, CSS, JavaScript, ES6+, React
        Redux and more. Although specialising in Front-end development, I’m now
        venturing into the Full Stack universe at my latest post @ Hive HR.
        <br />
        Want to know more? Take a scroll!
      </p>
      {windowWidth < mobileBreakpoint860 && (
        <span>
          <a
            href="https://github.com/garethlowrie/portfolio/raw/master/src/assets/Gareth%20Lowrie%20Resume.pdf"
            target="_blank"
            className={styles.mobileButton}
          >
            Download CV
          </a>
          <a
            href="https://linkedin.com/in/garethlowrie"
            target="_blank"
            className={styles.mobileButton}
          >
            Linked In
          </a>
        </span>
      )}
    </div>
  );
};

export const SkillsSection = ({ windowWidth }) => {
  const basis = windowWidth < mobileBreakpoint1080 ? "100%" : "50%";
  return (
    <div className={styles.contentSection}>
      <h2>EXPERTISE</h2>
      <Flex className={styles.expertiseLabels} wrap="wrap">
        <Flex.Item basis={basis} grow={0}>
          <div>
            <p>JavaScript and Libraries</p>
            <Tags
              items={[
                "ES6+",
                "React",
                "Redux",
                "Redux-saga",
                "TypeScript",
                "Recompose",
                "lodash",
                "Formik"
              ]}
            />
          </div>
        </Flex.Item>
        <Flex.Item basis={basis} grow={0}>
          <div>
            <p>Markup and Styling</p>
            <Tags
              items={[
                "HTML5",
                "CSS3",
                "LESS",
                "SVG",
                "JSON",
                "XML",
                "Bootstrap",
                "FontAwesome"
              ]}
            />
          </div>
        </Flex.Item>
      </Flex>
      <Flex className={styles.expertiseLabels} wrap="wrap">
        <Flex.Item basis={basis}>
          <div>
            <p>Development and Build Tools</p>
            <Tags
              items={[
                "git",
                "npm",
                "Webpack",
                "Gatsby",
                "GitLab",
                "Bitbucket",
                "GitHub",
                "Octopus",
                "TeamCity"
              ]}
            />
          </div>
        </Flex.Item>
        <Flex.Item basis={basis}>
          <div>
            <p>Development Methodologies</p>
            <Tags items={["Agile", "SCRUM"]} />
          </div>
        </Flex.Item>
      </Flex>
    </div>
  );
};

export const EducationSection = ({ windowWidth }) => {
  return (
    <div className={styles.contentSection}>
      <h2>EDUCATION</h2>
      <Flex className={styles.expertiseLabels}>
        <Flex.Item basis="50%" grow={0}>
          <div>
            <p>JavaScript and Libraries</p>
            <Tags items={["ES6", "React", "Recompose", "lodash", "Formik"]} />
          </div>
        </Flex.Item>
        <Flex.Item basis="50%" grow={0}>
          <div>
            <p>Markup and Styling</p>
            <Tags
              items={[
                "HTML5",
                "CSS3",
                "LESS",
                "SVG",
                "JSON",
                "XML",
                "Bootstap",
                "FontAwesome"
              ]}
            />
          </div>
        </Flex.Item>
      </Flex>
      <Flex className={styles.expertiseLabels}>
        <Flex.Item basis="50%">
          <div>
            <p>Development and Build Tools</p>
            <Tags items={["git", "npm", "Webpack", "Gatsby"]} />
          </div>
        </Flex.Item>
        <Flex.Item basis="50%">
          <div>
            <p>Development Methodologies</p>
            <Tags items={["Agile", "SCRUM"]} />
          </div>
        </Flex.Item>
      </Flex>
    </div>
  );
};

export const ContactSection = () => {
  return (
    <div className={styles.contentSection}>
      <h2>CONTACT</h2>
      <p>Like to get in touch? Feel free to drop me a line..</p>
      <div className={styles.contactButtonContainer}>
        <a href="mailto:gareth@lowrie.io" className={styles.contactLink}>
          <img src={email} className={styles.icon} />
        </a>
        <a href="tel:+447815593011" className={styles.contactLink}>
          <img src={phone} className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export const MAP = {
  HEADER: getContext({ windowWidth: PropTypes.number })(HeaderSection),
  PRO: getContext({ windowWidth: PropTypes.number })(
    ProfessionalProfileSection
  ),
  SKILLS: getContext({ windowWidth: PropTypes.number })(SkillsSection),
  EMPLOYMENT: getContext({ windowWidth: PropTypes.number })(EmploymentSection),
  CONTACT: compose(
    getContext({ windowWidth: PropTypes.number }),
    branch(
      ({ windowWidth }) => windowWidth < mobileBreakpoint860,
      renderComponent(ContactSection)
    )
  )(renderNothing())
};
