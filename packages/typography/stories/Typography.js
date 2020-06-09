import React, { Component } from 'react';
import styled from 'styled-components';
import { PdIcon } from '@pd-baseline-portal/pd-icon';
import { H4, H6 } from '..';
import typographyTheme from '../src/styles/typographyTheme';

const ColorBlock = styled.div`
    border-radius: 0.2rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    flex-flow: column wrap;
    height: 12rem;
    justify-content: flex-end;
    margin: 1rem;
    padding: 6.5rem 0.75rem 0.5rem;
    position: relative;
    width: 10rem;

    &:before {
        background-color: ${props =>
            (props.theme.typography &&
                props.theme.typography.color &&
                props.theme.typography.color[props.colorValue]) ||
            typographyTheme.typography.color[props.colorValue]};
        border-top-left-radius: 0.2rem;
        border-top-right-radius: 0.2rem;
        box-shadow: 0 4px 20px -10px rgba(0, 0, 0, 0.5);
        content: '';
        display: block;
        height: 6rem;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;

const Copied = styled.div`
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    bottom: 0;
    color: #4caf50;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
`;

class ColorList extends Component {
    constructor(props) {
        super(props);

        this.state = { copySuccess: false };
    }

    copyToClipboard = value => {
        window.navigator.clipboard.writeText(`${value}`);
        this.setState({ copySuccess: true });

        setTimeout(() => {
            this.setState({
                copySuccess: false,
            });
        }, 1200);
    };

    render() {
        const { copySuccess } = this.state;

        return (
            <>
                {copySuccess ? (
                    <Copied>
                        <PdIcon icon="tick" size={40} color="#4caf50" />
                        <div>Copied</div>
                    </Copied>
                ) : null}

                {Object.entries(typographyTheme.typography.color).map(([key, value]) => (
                    <ColorBlock
                        colorValue={key}
                        key={value}
                        onClick={() => this.copyToClipboard(value)}
                    >
                        <H4>{key}</H4>
                        <H6>{value}</H6>
                    </ColorBlock>
                ))}
            </>
        );
    }
}

export default ColorList;
