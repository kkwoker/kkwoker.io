import React from 'react';
import { NotFoundStyle } from './Styles';

class NotFound extends React.Component {
  render() {
    return (
      <NotFoundStyle>
        <h1>404. This is not the page you are looking for...</h1>
        <img src="http://4.bp.blogspot.com/-lnVYzKeDYjQ/VbOkAA1WgcI/AAAAAAAAMjY/EKpyHYba4O8/s1600/hypnocat.gif" alt="Hypo cat"/>

        <div>
          Bring me back <a href='/'> home </a> :(
        </div>
      </NotFoundStyle>
    );
  }
}

export default NotFound;
