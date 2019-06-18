import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';
import Loader from '../Loader/Loader';

import styles from './SearchResults.module.scss';

class SearchResults extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired,
        fetchUsers: PropTypes.func.isRequired,
    }

    async componentDidMount() {
        const query = `?q=${window.location.href.split('search/')[1]}`;
        this.props.fetchUsers({ query });
    }

    //TODO handle no results
    render() {
        const { loading, users } = this.props;
        return (
            <main className={styles.search_results}>
                {loading ? <Loader/> : (
                    users.map(user => {
                        const { id, email, name } = user;
                        return (
                            <div className={styles.search_result} key={id}>
                                <Avatar email={email} id={id} diameter={60}/>
                                <Link to={`/profile/${id}`}>{name}</Link>
                            </div>
                        )
                    })
                )}
            </main>
        )
    }
    

}

export default SearchResults;