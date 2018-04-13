import React from 'react';
import PropTypes from 'prop-types';
import Job from 'components/Job/Job';
import Flex from 'components/Flex/Flex';
import Tags from 'components/Tags/Tags';
import styles from './index.module.less';
import compose from 'recompose/compose';
import getContext from 'recompose/getContext';
import branch from 'recompose/branch';
import renderNothing from 'recompose/renderNothing';
import renderComponent from 'recompose/renderComponent';
import phone from 'icons/phone.svg';
import email from 'icons/email.svg';

const mobileBreakpoint860 = 860;
const mobileBreakpoint1080 = 1080;

export const EmploymentSection = ({ windowWidth }) => {
    return (
        <div className={styles.contentSection}>
            <h2>EMPLOYMENT</h2>
            <Job
                company="Communicator"
                role="Junior Developer"
                startDate="March 2018"
                endDate="Present"
                tags={['Agile', 'SCRUM', 'HTML5', 'CSS3', 'JavaScript', 'React', 'git', 'Jira', 'Bitbucket']}
            >
                <p>After training alongside the Product Development Team I secured a position as Front-end Developer and became part of a team of four who are responsible for maintain and developing the UX of the Communicator Suite.</p>
            </Job>
            <Job
                company="Communicator"
                role="Product Operations Analyst"
                startDate="January 2017"
                endDate="March 2018"
                tags={['Customer Service', 'SQL', 'Jira Service Desk Administration', 'Bug Fixing', 'Confluence', 'User Guide Creation', 'Blog Creator', '5 Star Satisfaction Rating']}
            >
            <p>After graduating I joined Communicator as a Product Operations Analyst where I provided exceptional technical support both internally and to customers. This opportunity acted as a stepping stone on my career path as this allowed me to train on the job to fulfil my ambition to become a Front-end Developer.</p>
            </Job>
        </div>
    )
}

export const HeaderSection = ({ windowWidth }) => {
    return (
      <div className={styles.headerSection}>
        <h1>GARETH LOWRIE</h1>
        <hr />
        <p className={styles.tagline}>Front-end Developer in Newcastle upon Tyne, UK</p>
      </div>
    )
}

export const ProfessionalProfileSection = ({ windowWidth }) => {
  return (
      <div className={styles.contentSection}>
        <h2>PROFESSIONAL PROFILE</h2>
        <p className={styles.tagline}>Hey. I'm Gareth, an enthusiastic UX developer. I turn beautiful designs into stateful applications using HTML, CSS, JavaScript, ES6, React and more. I'm a high flying guy with academic excellence and a real passion for the latest technologies. Want to know more? Take a scroll!</p>
        {windowWidth < mobileBreakpoint860 &&
          <span><a href="https://github.com/garethlowrie/portfolio/raw/master/src/assets/Gareth%20Lowrie%20Resume.pdf" target="_blank" className={styles.mobileButton}>Download CV</a>
          <a href="https://linkedin.com/in/garethlowrie" target="_blank" className={styles.mobileButton}>Linked In</a></span>}
      </div>
    )
}

export const SkillsSection = ({ windowWidth }) => {
  const basis = windowWidth < mobileBreakpoint1080 ? '100%' : '50%';
    return (
      <div className={styles.contentSection}>
        <h2>EXPERTISE</h2>
        <Flex className={styles.expertiseLabels} wrap="wrap">
          <Flex.Item basis={basis} grow={0}>
            <div>
              <p>JavaScript and Libraries</p>
              <Tags items={['ES6', 'React', 'Recompose', 'lodash', 'Formik']} />
            </div>
          </Flex.Item>
          <Flex.Item basis={basis} grow={0}>
            <div>
              <p>Markup and Styling</p>
              <Tags items={['HTML5', 'CSS3', 'LESS', 'SVG', 'JSON', 'XML', 'Bootstap', 'FontAwesome']} />
            </div>
          </Flex.Item>
        </Flex>
        <Flex className={styles.expertiseLabels} wrap="wrap">
          <Flex.Item basis={basis}>
            <div>
              <p>Development and Build Tools</p>
              <Tags items={['git', 'npm', 'Webpack', 'Gatsby']} />
            </div>
          </Flex.Item>
          <Flex.Item basis={basis}>
            <div>
              <p>Development Methodologies</p>
              <Tags items={['Agile', 'SCRUM']} />
            </div>
          </Flex.Item>
        </Flex>
      </div>
    )
}

export const EducationSection = ({ windowWidth }) => {
    return (
      <div className={styles.contentSection}>
        <h2>EDUCATION</h2>
        <Flex className={styles.expertiseLabels}>
          <Flex.Item basis="50%" grow={0}>
            <div>
              <p>JavaScript and Libraries</p>
              <Tags items={['ES6', 'React', 'Recompose', 'lodash', 'Formik']} />
            </div>
          </Flex.Item>
          <Flex.Item basis="50%" grow={0}>
            <div>
              <p>Markup and Styling</p>
              <Tags items={['HTML5', 'CSS3', 'LESS', 'SVG', 'JSON', 'XML', 'Bootstap', 'FontAwesome']} />
            </div>
          </Flex.Item>
        </Flex>
        <Flex className={styles.expertiseLabels}>
          <Flex.Item basis="50%">
            <div>
              <p>Development and Build Tools</p>
              <Tags items={['git', 'npm', 'Webpack', 'Gatsby']} />
            </div>
          </Flex.Item>
          <Flex.Item basis="50%">
            <div>
              <p>Development Methodologies</p>
              <Tags items={['Agile', 'SCRUM']} />
            </div>
          </Flex.Item>
        </Flex>
      </div>
    )
}

export const ContactSection = () => {
  return (
      <div className={styles.contentSection}>
          <h2>CONTACT</h2>
          <p>Like to get in touch? Feel free to drop me a line..</p>
          <div className={styles.contactButtonContainer}>
            <a href="mailto:gareth@lowrie.io" className={styles.contactLink}><img src={email} className={styles.icon} /></a>
            <a href="tel:+447815593011" className={styles.contactLink}><img src={phone} className={styles.icon} /></a>
          </div>
      </div>
  )
}

export const MAP = {
  'HEADER': getContext({ 'windowWidth': PropTypes.number })(HeaderSection),
  'PRO': getContext({ 'windowWidth': PropTypes.number })(ProfessionalProfileSection),
  'SKILLS': getContext({ 'windowWidth': PropTypes.number })(SkillsSection),
  'EMPLOYMENT': getContext({ 'windowWidth': PropTypes.number })(EmploymentSection),
  'CONTACT': compose(
      getContext({ 'windowWidth': PropTypes.number }),
      branch(
        ({ windowWidth }) => windowWidth < mobileBreakpoint860,
        renderComponent(ContactSection)
      )
    )(renderNothing())
};