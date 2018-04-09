import React from 'react';
import { BlogListStyle } from './Styles';

class Blog extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { expanded: false };
  // }
  // onClick() {
  //   this.setState((state) => ({ expanded: !state.expanded }));
  // }
  render() {
    const blogList = [
      { name: 'Item1', details: 'Details'},
      { name: 'Item2', details: 'Details'},
      { name: 'Item3', details: 'Details'},
      { name: 'Item4', details: 'Details'},
      { name: 'Item5', details: 'Details'}
    ]
    return (
      <div>
        <h1>Blog.</h1>
        <h2>Coming soon...</h2>

        <BlogListStyle>
          { blogList.map(blog =>
            <a href={`blog/${blog.name}`}>
              <div className='blog-item'>
                { blog.name }
              </div>
            </a>
          )}
        </BlogListStyle>

        <a href='/'>Return home</a>
      </div>
    );
  }
}

export default Blog;
