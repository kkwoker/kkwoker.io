import React from 'react';
import PropTypes from 'prop-types';
import { BodyContentStyle } from './Styles';
import NotFound from '../NotFound';
import posts from '../../assets/posts.json';

class BlogPost extends React.Component {

  // TODO: Examine if passing post.html into this component would work better.
  findPost() {
    const { pathname } = this.context.router.history.location;
    const postRoute = pathname.split('/')[2];
    return posts.find(post => post.routeKey === postRoute);
  }

  render() {

    const post = this.findPost();

    if (!post) {
      return <NotFound />
    }

    return (
      <div>
        <h1>{ post.title }</h1>
        <h2>{ post.subtitle }</h2>
        <sub>{ new Date(post.date).toDateString() }</sub>
        <BodyContentStyle>
          { post.imageSrc && <img src={post.imageSrc} alt={post.imageAlt} /> }
          <div dangerouslySetInnerHTML={{__html: post.html}} />
        </BodyContentStyle>
        <div>
          <a href='/home'>Back to blog list</a>
        </div>
      </div>
    )
  }
}

BlogPost.contextTypes = {
  router: PropTypes.object
};

export default BlogPost;
