import React from 'react';
import PropTypes from 'prop-types';
import typographyPropTypes from '../prop-types/typographyPropTypes';
import Heading6 from './Heading6';

const H6 = props => {
    const { color, className, children } = props;

    return (
        <Heading6 className={className} colorValue={color}>
            {children}
        </Heading6>
    );
};

H6.propTypes = {
    color: typographyPropTypes.typographyColor,
    className: PropTypes.string,
    children: PropTypes.node,
};

H6.defaultProps = {
    color: 'default',
    className: null,
    children: null,
};

export default H6;
