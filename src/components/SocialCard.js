import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CreditBox from './CreditBox';
import Headline from './Headline';
import Icon from './Icon';
import Message from './Message';

const Wrapper = styled('div')`
    border: solid;
    margin: 10px;
    padding: 10px;
    width: 500px;
`;

class SocialCard extends Component {
    render() {
        return (
            <Wrapper>
                <CreditBox
                    name={this.props.creditName}
                    imageUrl={this.props.portraitUrl}
                />
                <Icon
                    url={`${this.props.logoUrl}`}
                    title={`${this.props.title}`}
                />
                <Headline
                    text={this.props.headlineText}
                />
                <Message
                    text={this.props.messageText}
                />
            </Wrapper>
        );
    }
}

SocialCard.propTypes = {
    creditName: PropTypes.string,
    headlineText: PropTypes.string,
    logoUrl: PropTypes.string,
    messageText: PropTypes.string,
    portraitUrl: PropTypes.string,
    title: PropTypes.string,
};

SocialCard.defaultProps = {
    creditName: '',
    headlineText: '',
    logoUrl: '',
    messageText: '',
    portraitUrl: '',
    title: '',
};

export default SocialCard;
