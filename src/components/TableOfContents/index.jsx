// This component is meant to be on the side, is a list of links of the titles
// of blog posts. It is sticky, so the infinite scroll will not remove the
// table of contents from sight.
//

// Sticky

import React from 'react';
import PropTypes from 'prop-types';
import {
  TableOfContentsDiv
} from './Styles';

class TableOfContents extends React.Component {

  render() {
    const headings = ['Heading 1', 'Heading 2', 'Heading 3'];
    return (
      <TableOfContentsDiv>
        <div className='sticky'>
          { headings.map(heading =>
            <li> { heading } </li>
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
