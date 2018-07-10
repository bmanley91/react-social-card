import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div className="message">
                <p>
                    {this.props.text}
                </p>
            </div>
        );
    }
}

Message.propTypes = {
    text: PropTypes.string,
};

Message.defaultProps = {
    text: '',
};

export default Message;
