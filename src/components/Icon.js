import { css } from 'react-emotion';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Icon extends Component {
    render() {
        return (
            <div className={`card-icon-${this.props.title}`}>
                <img
                    src={this.props.url}
                    alt={`${this.props.title}'s title.`}
                    className={css({
                        width: 500,
                        height: 500,
                    })}
                />
            </div>
        );
    }
}

Icon.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
};

Icon.defaultProps = {
    url: '',
    title: 'foo',
};

export default Icon;
