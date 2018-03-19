import React from 'react';
import Job from 'components/Job/Job';
import Flex from 'components/Flex/Flex';
import Tags from 'components/Tags/Tags';
import styles from './index.module.less';

export const EmploymentSection = () => {
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

export const HeaderSection = () => {
    return (
      <div className={styles.headerSection}>
        <h1>GARETH LOWRIE</h1>
        <hr />
        <p className={styles.tagline}>Front-end Developer in Newcastle upon Tyne, UK</p>
      </div>
    )
}
  
export const ProfessionalProfileSection = () => {
    return (
      <div className={styles.contentSection}>
        <h2>PROFESSIONAL PROFILE</h2>
        <p className={styles.tagline}>Hey. I'm Gareth, an enthusiastic UX developer. I turn beautiful designs into stateful applications using HTML, CSS, JavaScript, ES6, React and more. I'm a high flying guy with academic excellence and a real passion for the latest technologies. Want to know more? Take a scroll!</p>
      </div>
    )
}
  
export const SkillsSection = () => {
    return (
      <div className={styles.contentSection}>
        <h2>EXPERTISE</h2>
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
  
export const EducationSection = () => {
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