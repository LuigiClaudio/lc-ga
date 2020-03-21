import React from 'react';
import PropTypes from 'prop-types';
import typographyPropTypes from '../prop-types/typographyPropTypes';
import Heading4 from './Heading4';

const H4 = props => {
    const { color, className, children } = props;

    return (
        <Heading4 className={className} colorValue={color}>
            {children}
        </Heading4>
    );
};

H4.propTypes = {
    color: typographyPropTypes.typographyColor,
    className: PropTypes.string,
    children: PropTypes.node,
};

H4.defaultProps = {
    color: 'default',
    className: null,
    children: null,
};

export default H4;
