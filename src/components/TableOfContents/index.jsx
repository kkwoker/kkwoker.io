// This component is meant to be on the side, is a list of links of the titles
// of blog posts. It is sticky, so the infinite scroll will not remove the
// table of contents from sight.
//

// Sticky
// TODO: Make the position to be in the right position

import React from 'react';
import PropTypes from 'prop-types';
import {
  TableOfContentsDiv
} from './Styles';
import posts from '../../assets/posts';

// Not the best way of doing this...
const publishedPosts = posts
  .filter(post => post.draft === false)
  .sort(post => post.date)
  .reverse();

class TableOfContents extends React.Component {
  render() {
    return (
      <TableOfContentsDiv>
        <div className='sticky'>
          { publishedPosts.map(post =>
            <a key={post.routeKey} href={`#${post.routeKey}`}><li> { post.title } </li></a>
          )}
        </div>
      </TableOfContentsDiv>
    )
  }
}

TableOfContents.propTypes = {
  list: PropTypes.array
};

export default TableOfContents;
