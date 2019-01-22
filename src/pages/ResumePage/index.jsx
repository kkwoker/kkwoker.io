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
            Web development: JavaScript, CSS, HTML, React, Redux
          </li>
          <li>
            DevOps: AWS, GCP, Continuous Integration
          </li>
          <li>
            Data Science: python, nltk, numpy, pandas, spark, big data
          </li>
          <li>
            Machine Learning: TensorFlow, Keras, Neural Nets, classification, regressions
          </li>
          <li>
            Work process: agile, kanban, scrum, story writing, technical writing
          </li>


          <h2> WORK HISTORY </h2>
          <li>
            Senior Software Developer - TELUS Digital - Checkout - 2016 - now
          </li>
          <li>
            DevOps - TELUS Digital - 2014
          </li>

          <h2> PROJECTS </h2>
          <li>
            Neural network music synthesizer
          </li>
          <li>
            Unified Checkout
          </li>

          <h2> EDUCATION </h2>
          <li>
            Simon Fraser University - Bachors of Computing Science w/ concetrantion in AI. GPA: 3.3
          </li>

          <h2> HOBBIES </h2>
          <li>
            exploring mountains on a snowboard
          </li>
          <li>
            dabbling in electronic music
          </li>

          <br />

        </BioStyle>
      </HomeStyle>
    )
  }
}

export default ResumePage;
