import React from 'react';
import classNames from 'classnames';
import styles from './Flex.module.less';

const Flex = ({
    alignItems,
    justifyContent,
    direction,
    wrap,
    children,
    className,
    props
}) => {
    const style = {
        alignItems,
        justifyContent,
        flexDirection: direction,
        flexWrap: wrap
    };

    const flexStyles = classNames(styles.flex, className);

    return (
        <div style={style} className={flexStyles} {...props}>
            {children}
        </div>
    )
}

Flex.defautProps = {
    direction: 'row',
    wrap: 'wrap'
}

const FlexItem = ({
    component: Component,
    grow,
    shrink,
    basis,
    children,
    className,
    props
}) => {
    const style = {
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis
    };

    return (
        <Component style={style} className={className} {...props}>
            {children}
        </Component>
    )
}

FlexItem.defaultProps = {
    component: 'div',
    grow: '0',
    shrink: '0',
    basis: 'auto'
}

Flex.Item = FlexItem;

export default Flex;