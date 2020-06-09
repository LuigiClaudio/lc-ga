import React from 'react';
import PropTypes from 'prop-types';
import typographyPropTypes from '../prop-types/typographyPropTypes';
import Heading5 from './Heading5';

const H5 = props => {
    const { color, className, children } = props;

    return (
        <Heading5 className={className} colorValue={color}>
            {children}
        </Heading5>
    );
};

H5.propTypes = {
    color: typographyPropTypes.typographyColor,
    className: PropTypes.string,
    children: PropTypes.node,
};

H5.defaultProps = {
    color: 'default',
    className: null,
    children: null,
};

export default H5;
