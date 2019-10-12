import styled from 'styled-components'
import { media } from '../style-utils'

export const AppStyle = styled.div`
  h1 {
    margin-bottom: 10px;

    ${media.msmallUp`
      font-size: 65px;
    `}
  }

  h2 {
    font-size: 20px;
    ${media.mediumUp`
      font-size: 25px;
    `}
  }
`

export const AppContainerStyle = styled.div`
  display: flex;
  justify-content: center;

  ${media.mediumUp`
    margin-right: 100px;
    margin-left: 100px;
  `}

  .App {
    width: 320px;
    ${media.msmallUp`
      width: 470px;
    `}
    ${media.mediumUp`
      width: 700px;
    `}
  }
`
