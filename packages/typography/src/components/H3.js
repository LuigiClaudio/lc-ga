import React from 'react';
import PropTypes from 'prop-types';
import typographyPropTypes from '../prop-types/typographyPropTypes';
import Heading3 from './Heading3';

const H3 = props => {
    const { color, className, children } = props;

    return (
        <Heading3 className={className} colorValue={color}>
            {children}
        </Heading3>
    );
};

H3.propTypes = {
    color: typographyPropTypes.typographyColor,
    className: PropTypes.string,
    children: PropTypes.node,
};

H3.defaultProps = {
    color: 'default',
    className: null,
    children: null,
};

export default H3;
