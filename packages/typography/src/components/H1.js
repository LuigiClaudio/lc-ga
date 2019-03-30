import React from 'react';
import PropTypes from 'prop-types';
import typographyPropTypes from '../prop-types/typographyPropTypes';
import Heading1 from './Heading1';

const H1 = props => {
    const { color, className, children } = props;

    return (
        <Heading1 className={className} colorValue={color}>
            {children}
        </Heading1>
    );
};

H1.propTypes = {
    color: typographyPropTypes.typographyColor,
    className: PropTypes.string,
    children: PropTypes.node,
};

H1.defaultProps = {
    color: 'dark',
    className: null,
    children: null,
};

export default H1;
