import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../NotFound';
import ImageLoader from '../../components/ImageLoader';
import posts from '../../assets/posts.json';
import {
  BlogPostStyle,
  BodyContentStyle,
  ImageStyle
} from './Styles';

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
      <BlogPostStyle>
        <h1>{ post.title }</h1>
        <h2>{ post.subtitle }</h2>
        <sub>{ new Date(post.date).toDateString() }</sub>
        { post.imageSrc &&
            <ImageLoader
              styleComponent={ImageStyle}
              src={post.imageSrc}
              alt={post.imageAlt} />
        }
        <BodyContentStyle>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
        </BodyContentStyle>
        <div>
          <a href='/blog'>Back to blog list</a>
        </div>
      </BlogPostStyle>
    )
  }
}

BlogPost.contextTypes = {
  router: PropTypes.object
};

export default BlogPost;
