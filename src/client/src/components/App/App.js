import React, { Component } from 'react';
import Routes from '../Routes';
import { HeaderContainer as Header } from '../misc/Header/HeaderContainer';
import cookies from 'js-cookie';

import styles from './App.module.scss';

class App extends Component {

    componentWillMount() {
        let payload = cookies.get('jwt_payload');
        if(payload) {
            console.log(window.atob(payload));            
        }
    }


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
