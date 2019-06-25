import React from 'react';

import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <main className={styles.not_found}>
            <h1>404!</h1>
            <p>The page you're looking for can't be found.</p>
        </main>
    )
}

export default NotFound;