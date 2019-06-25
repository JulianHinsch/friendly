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
        fetchSearchResults: PropTypes.func.isRequired,
    }

    async componentDidMount() {
        this.props.fetchSearchResults(`${window.location.href.split('/search/')[1]}`);        
    }

    render() {
        const { loading, users } = this.props;
        const query = `${window.location.href.split('/search/?q=')[1]}`;
        return (
            <main className={styles.search_results}>
                {loading ? <Loader/> : (
                    <div>
                        <h1 className={styles.results_count}>
                            Found {users.length} result{users.length ===1 ? '' : 's'} for
                            <span className={styles.query}>&nbsp;"{query}"</span>
                            {users.length === 0 ? '.' : ':'}
                        </h1>
                        {users.map(user => {
                            const { id, emailHash, name } = user;
                            return (
                                <div className={styles.search_result} key={id}>
                                    <Avatar emailHash={emailHash} id={id} diameter={50}/>
                                    <Link to={`/profile/${id}`}>{name}</Link>
                                </div>
                            )
                        })}
                    </div>
                )}
            </main>
        )
    }
}

export default SearchResults;