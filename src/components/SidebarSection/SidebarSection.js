import React from 'react';
import classNames from 'classnames';
import Flex from 'components/Flex/Flex';
import styles from './SidebarSection.module.less';


const SidebarSection = ({
    header,
    children
}) => {
    return (
        <Flex.Item className={styles.sidebarSection}>
            <h2 className={styles.header}>{header}</h2>
            {children}
        </Flex.Item>
    )
}
export default SidebarSection;
