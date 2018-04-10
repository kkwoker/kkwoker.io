import React from 'react';
import PropTypes from 'prop-types';
import { BodyContentStyle } from './Styles';
import NotFound from '../NotFound';
import posts from '../../assets/posts.json';

class BlogPost extends React.Component {

  findPost() {
    const { pathname } = this.context.router.history.location;
    const postRoute = pathname.split('/')[2];
    return posts.find(post => post.routeKey === postRoute);
  }

  render() {

    const renderedPost = this.findPost();

    if (!renderedPost) {
      return <NotFound />
    }

    return (
      <div>
        <h1>{ renderedPost.title }</h1>
        <h2>{ renderedPost.subtitle }</h2>
        <div>{ new Date(renderedPost.date).toDateString() }</div>
        <BodyContentStyle>
          <div dangerouslySetInnerHTML={{__html: renderedPost.html}} />
        </BodyContentStyle>
        <div>
          <a href='/blog'>Back to blog list</a>
        </div>
      </div>
    )
  }
}

BlogPost.contextTypes = {
  router: PropTypes.object
};

export default BlogPost;
