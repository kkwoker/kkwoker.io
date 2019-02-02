import React from 'react';
import {
  BioStyle,
  HomeStyle,
  HeaderCardStyle
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
            DevOps: AWS, GCP, Ansible, Terraform, Docker, Continuous Integration
          </li>
          <li>
            Work process: agile, kanban, story writing, technical writing, documentation
          </li>

          <br />

          <h2> WORK HISTORY </h2>
          <li>
            Senior Software Developer - TELUS Digital - Checkout - 2016 - now
            <ul>
              <li>
                Led development of large scale checkout application serving roughly 100,000 requests per day.
              </li>
              <li>
                Increased conversion rates by 500% by iteratively improving UI features based off of data.
              </li>
              <li>
                Gradually removed technical debt along with building features and mentoring other developers
                on best software practices.
              </li>
            </ul>
          </li>
          <li>
            DevOps - TELUS Digital - 2014
            <ul>
              <li>
                Built AWS infrastructure automation using Ansible, Terraform, Docker, and standardized
                configuration as code for hundreds of TELUS micro-sites.
              </li>
              <li>
                Improved the rate of safe code deployment by integrating TELUS's first continuous integration
                pipeline and advocated for Test Driven Development.
              </li>
              <li>
                Built monitoring tools to maintain uptime and debugged production failures while on call.
              </li>
            </ul>
          </li>

          <br />

          <h2> PROJECTS </h2>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='http://kkwoker.io/robot-music.pdf'>
              Neural network music synthesizer
              (writeup and demo coming soon!)
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='http://kkwoker.io/pun-classification.pdf'>
              Pun classifier
              (writeup and jupyter notebook demo coming soon!)
            </a>
          </li>
          <li>
            <a href='/checkout-demo'> Unified Checkout </a>
          </li>

          <br />

          <h2> EDUCATION </h2>
          <li>
            Simon Fraser University - Bachelor's of Computing Science concentrating in AI. GPA: 3.3
            <ul>
              <h3> Software Development </h3>
              <li> CMPT 275 - Software Engineering - Java</li>
              <li> CMPT 383 - Programming Languages - Functional and Concurrent programming in Haskell and GoLang </li>
              <li> CMPT 354 - Database Systems - SQL, NoSQL, clustering, database management </li>
              <li> CMPT 300 - Operating Systems - Kernels, processes, unix, threads, parallel computing </li>
              <li> CMPT 307 - Data Structures + Algorithms - Greedy algs, dynamic programming, graph algs, network flows</li>

              <h3> Artificial Intelligence </h3>
              <li> CMPT 310 - Artificial Intellgience Survey - AI algorithms and general problems</li>
              <li> CMPT 353 - Data Science - Python, numpy, pandas, matplotlib, inference stats, big data </li>
              <li> CMPT 412 - Computer Vision - Convolutional nets, facial detection, photometric stereo, object tracking</li>
              <li> CMPT 726 - Machine Learning - Bayesian Inference, Neural Nets, PyTorch, Logistic Regressions, Classification</li>
              <li> CMPT 825 - Natural Language Processing - Language models, translation, grammars, topic modelling</li>
              <li> CMPT 880 - Deep Learning - Neural Nets </li>
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
            posting <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/kwookrr/?hl=en'> semi artistic photos </a>
          </li>
          <br />
          <sub>
            View a PDF version <a
              href='https://docs.google.com/document/d/12v6yrexY-UX9REkKMs-o4tWqZFf5YdoI4R5Nz8M2L0k/edit?usp=sharing'
              rel='noopener noreferrer'
              target='_blank'
              > here</a>.
          </sub>
        </BioStyle>

        <div className='home-link'>
          <a href='/'> Return home </a>
        </div>
      </HomeStyle>
    )
  }
}

export default ResumePage;
