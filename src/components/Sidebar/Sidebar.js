import React, { Component } from 'react';
import classNames from 'classnames';
import Flex from 'components/Flex/Flex';
import SidebarSection from 'components/SidebarSection/SidebarSection';
import SidebarItem from 'components/SidebarItem/SidebarItem';
import me from 'images/face.jpg'
import styles from './Sidebar.module.less';
import phone from 'icons/phone.svg';
import download from 'icons/download.svg';
import linkedin from 'icons/linkedin.svg';
import email from 'icons/email.svg';
import js from 'icons/js.svg';
import react from 'icons/react.svg';
import less from 'icons/less.svg';
import html from 'icons/html.svg';
import css from 'icons/css.svg';
import git from 'icons/git.svg';

const Sidebar = ({
    className,
    ...props
}) => {
    const sidebarStyles = classNames(styles.sidebar, className);
    return (
        <Flex.Item className={sidebarStyles} {...props}>
            <Flex direction="column">
                <Flex.Item className={styles.imageContainer}>
                    <img src={me} className={styles.image} />
                </Flex.Item>

                <SidebarSection header="ABOUT" icon={download}> 
                    <SidebarItem
                        icon={download}
                        linkProps={{ 'href': 'https://github.com/garethlowrie/portfolio/raw/master/src/assets/Gareth%20Lowrie%20Resume.pdf', 'target': '_blank' }}
                        linkText="Download My Resume"
                        label="PDF"
                    />
                    <SidebarItem
                        icon={linkedin}
                        linkProps={{ 'href': 'https://linkedin.com/in/garethlowrie', 'target': '_blank' }}
                        linkText="Check Out My Profile"
                        label="Linked In"
                    />
                </SidebarSection>

                <SidebarSection header="CONTACT" icon={phone}> 
                    <SidebarItem
                        icon={email}
                        linkProps={{ 'href': 'mailto:gareth@lowrie.io' }}
                        linkText="Send Me a Message"
                        label="Email me"
                    />
                    <SidebarItem
                        icon={phone}
                        linkProps={{ 'href': 'tel:+447815593011' }}
                        linkText="Prefer To Speak"
                        label="Phone me"
                    />
                </SidebarSection>

                <SidebarSection header="EXPERTISE"> 
                    <Flex justifyContent="space-around" wrap="no-wrap">
                        <img src={html} title="HTML5" className={styles.iconExpertise} />
                        <img src={css} title="CSS3" className={styles.iconExpertise} />
                        <img src={less} title="LESS" className={styles.iconExpertise} />
                        <img src={js} title="JavaScript" className={styles.iconExpertise} />
                        <img src={react} title="React" className={styles.iconExpertise} />
                        <img src={git} title="git" className={styles.iconExpertise} />
                    </Flex>
                </SidebarSection>
            </Flex>
        </Flex.Item>
    )
}

export default Sidebar;
