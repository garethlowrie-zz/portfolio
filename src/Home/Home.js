import React, { Component } from 'react';
import classNames from 'classnames';
import Flex from 'components/Flex/Flex';
import Sidebar from 'components/Sidebar/Sidebar';
import me from 'images/face.jpg'
import styles from './Home.module.less';

const IntroSection = () => {
  return (
    <Flex direction="column" alignItems="center" className={styles.introSection}>
      <h1>GARETH LOWRIE</h1>
      <hr />
      <p className={styles.tagline}>Front-end Developer in Newcastle upon Tyne, UK</p>
    </Flex>
  )
}

const ContentSection = () => {
  return (
    <Flex direction="column" alignItems="center" className={styles.contentSection}>
      <h2>PROFESSIONAL PROFILE</h2>
      <p className={styles.tagline}>Front-end Developer in Newcastle upon Tyne, UK</p>
    </Flex>
  )
}
class Home extends Component {
  render() {
    return (
      <Flex className="wrapper">
        <Sidebar basis="30%" grow={0} shrink={0} />
        <Flex.Item basis="70%" grow={1} shrink={0} className={styles.bodyContainer}>
          <Flex direction="column" justifyContent="flex-start" alignItems="center">
            <IntroSection />
            <ContentSection />
          </Flex>
        </Flex.Item>
      </Flex>
    );
  }
}

export default Home;
