import styled from 'styled-components';
import { media } from '../../style-utils';

export const BlogListStyle = styled.div`

   outline: 1px solid #efefef;
   width: 350px;

  ${ media.mediumUp`
    width: 600px;
  `}

   .blog-item {
     padding: 20px 20px;
     border-bottom: 1px solid #efefef;
   }

   a {
     color: inherit;
     text-decoration: inherit;
   }

   a:visited {
     color: #c4c2c4;
   }

   a:hover {
     color: hotpink;
   }

   a:active {
     color: #df00ef;
   }
`;
