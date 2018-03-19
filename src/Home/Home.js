import React, { Component } from 'react';
import Flex from 'components/Flex/Flex';
import classNames from 'classnames';

import Job from 'components/Job/Job';
import { HeaderSection, ProfessionalProfileSection, SkillsSection, EmploymentSection } from 'content/index';
import Sidebar from 'components/Sidebar/Sidebar';
import me from 'images/face.jpg'
import styles from './Home.module.less';

class Home extends Component {
  render() {
    return (
      <Flex className="wrapper">
        <Sidebar basis="30%" grow={0} shrink={0} />
        <Flex.Item basis="70%" grow={1} shrink={0} className={styles.bodyContainer}>
          <Flex direction="column" justifyContent="flex-start" alignItems="center">
            <HeaderSection />
            <ProfessionalProfileSection />
            <SkillsSection />
            <EmploymentSection />
          </Flex>
        </Flex.Item>
      </Flex>
    );
  }
}

export default Home;
