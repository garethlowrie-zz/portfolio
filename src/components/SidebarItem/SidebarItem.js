import React from 'react';
import styles from './SidebarItem.module.less';

const SidebarItem = ({
    icon,
    linkProps,
    linkText,
    label
}) => {
    return (
        <div className={styles.sidebarItem}>
            <img src={icon} className={styles.icon} />
            <div className={styles.textContainer}>
                <a {...linkProps}>{linkText}</a>
                <span className={styles.mute}>{label}</span>
            </div>
        </div>
    )
}
export default SidebarItem;
