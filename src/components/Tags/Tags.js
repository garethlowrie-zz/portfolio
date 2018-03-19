import React from 'react';
import Flex from 'components/Flex/Flex';
import styles from './Tags.module.less';

const Tags = ({
    items
}) => {
    return (
        <Flex wrap="wrap" className={styles.tagContainer}>
        {items.map((item, index) => (
            <span key={index} className={styles.tag}>{item}</span>
        ))}
        </Flex>
    )
}

Tags.defaultProps = {
    items: []
}

export default Tags;