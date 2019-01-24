import React from 'react';
import {
  BioStyle,
  HomeStyle,
  HeaderCardStyle,
  ContactStyle
} from '../Home/Styles';

class ResumePage extends React.Component {
  render() {
    return (
      <HomeStyle>
        <HeaderCardStyle>
          <h1> KINNAN KWOK </h1>

        </HeaderCardStyle>
        <BioStyle>
          <h2> SKILLSET </h2>
          <li>
            Data Science: python, nltk, numpy, pandas, spark, big data
          </li>
          <li>
            Machine Learning: TensorFlow, Keras, Neural Nets, classification, regressions, Bayes Inference
          </li>
          <li>
            Web Development: JavaScript, CSS, HTML, React, Redux
          </li>
          <li>
            DevOps: AWS, GCP, Continuous Integration
          </li>
          <li>
            Work process: agile, kanban, story writing, technical writing, documentation
          </li>

          <br />

          <h2> WORK HISTORY </h2>
          <li>
            Senior Software Developer - TELUS Digital - Checkout - 2016 - now
          </li>
          <li>
            DevOps - TELUS Digital - 2014
          </li>

          <br />

          <h2> PROJECTS </h2>
          <li>
            <a target='_blank' href='/robot-music.pdf'> Neural network music synthesizer
              (writeup and demo coming soon!)</a>
          </li>
          <li>
            <a target='_blank' href='TODO'> MovieLens Dataset exploration </a>
          </li>
          <li>
            <a href='/checkout-demo'> Unified Checkout </a>
          </li>

          <br />

          <h2> EDUCATION </h2>
          <li>
            Simon Fraser University - Bachelor's of Computing Science concentrating in AI. GPA: 3.3
            <ul>
              <li>
                CMPT 353 - Data Science
              </li>
              <li>
                CMPT 726 - Machine Learning
              </li>
              <li>
                CMPT 825 - Natural Language Processing
              </li>
              <li>
                CMPT 412 - Computer Vision
              </li>
            </ul>
          </li>

          <br />

          <h2> HOBBIES </h2>
          <li>
            exploring mountains on a snowboard
          </li>
          <li>
            dabbling in electronic music
          </li>
          <li>
            posting <a target='_blank' href='https://www.instagram.com/kwookrr/?hl=en'> semi artistic photos </a>
          </li>

          <br />

        </BioStyle>
      </HomeStyle>
    )
  }
}

export default ResumePage;
