import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';
import Loader from '../Loader/Loader';

import styles from './SearchResults.module.scss';

class SearchResults extends Component {

    static propTypes = {
        users: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            emailHash: PropTypes.string.isRequired,
        })).isRequired,
        loading: PropTypes.bool.isRequired,
        fetchUsers: PropTypes.func.isRequired,
        fetchSearchResults: PropTypes.func.isRequired,
    }

    async componentDidMount() {
        const query = `${window.location.href.split('/search/')[1]}`;
        this.props.fetchUsers(query);
    }

    render() {
        const { loading, users } = this.props;
        return (
            <main className={styles.search_results}>
                {loading ? <Loader/> : users.length === 0 ? (
                    <div className={styles.no_results}>
                        No results!
                    </div>
                ) : (
                    users.map(user => {
                        const { id, emailHash, name } = user;
                        return (
                            <div className={styles.search_result} key={id}>
                                <Avatar emailHash={emailHash} id={id} diameter={50}/>
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