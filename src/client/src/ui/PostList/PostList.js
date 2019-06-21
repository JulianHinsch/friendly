import React, { Component } from 'react';
import styles from './PostList.module.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

import Loader from '../Loader/Loader';
import Post from '../Post/PostContainer';

export default class PostList extends Component {

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        posts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            updatedAt: PropTypes.string.isRequired,
            user: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                emailHash: PropTypes.string.isRequired,
            }).isRequired,
            comments: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                createdAt: PropTypes.string.isRequired,
                updatedAt: PropTypes.string.isRequired,
                user: PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    emailHash: PropTypes.string.isRequired,
                }).isRequired,
            })).isRequired,
            reactions: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                type: PropTypes.string.isRequired,
                createdAt: PropTypes.string.isRequired,
                updatedAt: PropTypes.string.isRequired,
                user: PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    emailHash: PropTypes.string.isRequired,
                }).isRequired,
            })).isRequired,
        })).isRequired,
    }
    
    render() {
        const { loading, posts } = this.props;
        return (
            <div className={styles.post_list} id='post_list'>
                {loading ? <Loader/> : (
                    posts.sort((p1,p2) => {
                        return moment(p1.updatedAt) - moment(p2.updatedAt);
                    }).map(post => <Post key={post.id} {...post}/>)
                )}
            </div>
        )
    }
}



