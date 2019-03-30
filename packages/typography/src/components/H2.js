import React from 'react';
import PropTypes from 'prop-types';
import typographyPropTypes from '../prop-types/typographyPropTypes';
import Heading2 from './Heading2';

const H2 = props => {
    const { color, className, children } = props;

    return (
        <Heading2 className={className} colorValue={color}>
            {children}
        </Heading2>
    );
};

H2.propTypes = {
    color: typographyPropTypes.typographyColor,
    className: PropTypes.string,
    children: PropTypes.node,
};

H2.defaultProps = {
    color: 'dark',
    className: null,
    children: null,
};

export default H2;
