import React, { Component } from 'react';
import Routes from '../Routes';
import Header from '../misc/Header/Header';

import styles from './App.module.scss';

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                {/* <Header auth={auth}/> */}
                 {/* <Routes auth={auth}/> */}
                 <Header/>
                 <Routes/>
            </div>
        );
    }
}

export default App;
