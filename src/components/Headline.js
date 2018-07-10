import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Headline extends Component {
    render() {
        return (
            <div className="headline">
                <h1>
                    {this.props.text}
                </h1>
            </div>
        );
    }
}

Headline.propTypes = {
    text: PropTypes.string,
};

Headline.defaultProps = {
    text: '',
};

export default Headline;
