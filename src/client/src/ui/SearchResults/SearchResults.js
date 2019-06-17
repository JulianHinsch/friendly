import React, { Component } from 'react';
import styles from './SearchResults.module.scss';

class SearchResults extends Component {

    async componentDidMount() {
        await this.props.search();
    }

    render() {
        const { loading, error, results } = this.props;
        return (
            <main>
                {loading ? (
                    <div className='loading'/>
                ) : error ? (
                    <div className='error'/>
                ) : (
                    results.map(result => {
                        return (
                            <div className='result'>
                            
                            </div>
                        )
                    })
                )}
            </main>
        )
    }
    

}

export default SearchResults;