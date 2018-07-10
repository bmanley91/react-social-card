import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CreditWrapper = styled('div')`
    height: 0;
    float: right;
    position: relative;
    padding-right: 10px;
    top: 420px;
    z-index: 1;
`;

const TextWrapper = styled('div')`
    background-color: white;
    float: left;
    padding-left: 5px;
    padding-right: 5px;
`;

class Message extends Component {
    render() {
        return (
            <CreditWrapper>
                <img
                    src={this.props.imageUrl}
                    alt="credit"
                    className={css({
                        width: 50,
                        height: 50,
                    })}
                />
                <TextWrapper>
                    <p>
                        {this.props.name}
                    </p>
                </TextWrapper>
            </CreditWrapper>
        );
    }
}

Message.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
};

Message.defaultProps = {
    imageUrl: '',
    name: '',
};

export default Message;
