import React, { Component } from 'react';
import classNames from 'classnames';
import Flex from 'components/Flex/Flex';
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

const SidebarItem = ({
    header,
    children
}) => {
    return (
        <Flex.Item className={styles.sidebarItem}>
            <h2 className={styles.header}>{header}</h2>
            {children}
        </Flex.Item>
    )
}

const Sidebar = (props) => {
    return (
        <Flex.Item className={styles.sidebar} {...props}>
            <Flex direction="column">
                <Flex.Item className={styles.imageContainer}>
                    <img src={me} className={styles.image} />
                </Flex.Item>

                <SidebarItem header="ABOUT" icon={download}> 
                    <div>
                        <img src={download} className={styles.icon} />
                        <div className={styles.textContainer}>
                            <a href="http://garethlowrie.co.uk/cv.pdf" target="_blank">Download My Resume</a>
                            <span className={styles.mute}>PDF</span>
                        </div>
                    </div>
                    <div>
                        <img src={linkedin} className={styles.icon} />
                        <div className={styles.textContainer}>
                            <a href="https://linkedin.com/in/garethlowrie" target="_blank">Check Out My Profile</a>
                            <span className={styles.mute}>Linked In</span>
                        </div>
                    </div>
                </SidebarItem>

                <SidebarItem header="CONTACT" icon={phone}> 
                    <div>
                        <img src={email} className={styles.icon} />
                        <div className={styles.textContainer}>
                            <a href="mailto:gareth@garethlowrie.co.uk">Send Me a Message</a>
                            <span className={styles.mute}>Email me</span>
                        </div>
                    </div>
                    <div>
                        <img src={phone} className={styles.icon} />
                        <div className={styles.textContainer}>
                            <a href="tel:+447815593011">Prefer To Speak</a>
                            <span className={styles.mute}>Phone me</span>
                        </div>
                    </div>
                    
                </SidebarItem>

                <SidebarItem header="EXPERTISE"> 
                    <Flex justifyContent="space-around" wrap="no-wrap">
                        <img src={html} title="HTML5" grow={0} shrink={0} className={styles.iconExpertise} />
                        <img src={css} title="CSS3" grow={0} shrink={0} className={styles.iconExpertise} />
                        <img src={less} title="LESS" grow={0} shrink={0} className={styles.iconExpertise} />
                        <img src={js} title="JavaScript" grow={0} shrink={0} className={styles.iconExpertise} />
                        <img src={react} title="React" grow={0} shrink={0} className={styles.iconExpertise} />
                        <img src={git} title="git" grow={0} shrink={0} className={styles.iconExpertise} />
                    </Flex>
                </SidebarItem>
            </Flex>
        </Flex.Item>
    )
}

export default Sidebar;
