import React from 'react'
import Header from '../../components/Header'
import WebGL from '../../components/WebGL'
import {
  HomeStyle,
  Footer
} from './Styles'

class Home extends React.Component {
  render () {
    return (
      <HomeStyle>
        <Header />

        <WebGL />

        <Footer>
          <div>
            Interested in chatting? Contact me at&nbsp;
            <a href='mailto:kkwoker@gmail.com'>
              kkwoker@gmail.com
            </a>
          </div>
          <div>See a bug? File an issue <a
            href='https://github.com/kkwoker/kkwoker.io'>here</a>!
          </div>
          <div> Last Updated: Feb 1st, 2019 </div>
          <div> Built with ReactJS and <span role='img' aria-label='heart'>❤️ </span> </div>
        </Footer>
      </HomeStyle>
    )
  }
}

export default Home
