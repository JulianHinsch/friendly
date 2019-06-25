import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Routes from '../Routes/Routes';

import { HeaderContainer as Header } from '../Header/HeaderContainer';

import '../../styles/global.scss';
import styles from './App.module.scss';

class App extends Component {

    static propTypes = {
        getAuth: PropTypes.func.isRequired,
    }

    componentWillMount() {
        this.props.getAuth();
    }

    render() {
        return (
            <div className={styles.app}>
                 <Header/>
                 <Routes/>
            </div>
        );
    }
}

export default App;
