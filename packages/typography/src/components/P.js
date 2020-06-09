import React from 'react';
import PropTypes from 'prop-types';
import typographyPropTypes from '../prop-types/typographyPropTypes';
import Paragraph from './Paragraph';

const P = props => {
    const { color, lead, className, children } = props;

    return (
        <Paragraph className={className} colorValue={color} lead={lead}>
            {children}
        </Paragraph>
    );
};

P.propTypes = {
    color: typographyPropTypes.typographyColor,
    className: PropTypes.string,
    lead: PropTypes.bool,
    children: PropTypes.node,
};

P.defaultProps = {
    color: 'default',
    className: null,
    lead: false,
    children: null,
};

export default P;
