import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class InfiniteScroll extends Component {

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        loadFunction: PropTypes.func.isRequired,
        childComponent: PropTypes.instaceOf(Component).isRequired,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const wrapper = document.getElementById('infinite_scroll');
        if(wrapper.getBoundingClientRect().bottom <= window.innerHeight) {
            this.props.loadFunction();
        };
    }

    render() {
        return (
            <div id='infinite_scroll'>
                {this.props.children}
                {this.props.loading && <Loader/>}
            </div>
        )
    }
}