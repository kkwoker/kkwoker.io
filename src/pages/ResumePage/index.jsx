import React from 'react'
import Header from '../../components/Header'

class ResumePage extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <sub>
          View a printable PDF version <a
            href='http://kkwoker.io/Kinnan Kwok Resume.pdf'
            rel='noopener noreferrer'
            target='_blank'
          > here</a>.
        </sub>
      </div>
    )
  }
}

export default ResumePage
