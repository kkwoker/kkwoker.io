import React from 'react'
import {
  BioStyle,
  HomeStyle
} from '../Home/Styles'
import { HeaderCardStyle } from '../../components/Header/Styles'
import Header from '../../components/Header'

class ResumePage extends React.Component {
  render () {
    return (
      <HomeStyle>
        <Header />
        <sub>
          View a printable PDF version <a
            href='http://kkwoker.io/Kinnan Kwok Resume.pdf'
            rel='noopener noreferrer'
            target='_blank'
          > here</a>.
        </sub>
        <BioStyle>
          <h2> Skills </h2>
          <li>
            Data science: python, nltk, numpy, pandas, spark, big data
          </li>
          <li>
            Machine learning: TensorFlow, Keras, Neural Nets, classification, regressions, Bayes Inference
          </li>
          <li>
            Web development: JavaScript, CSS, HTML, React, Redux
          </li>
          <li>
            DevOps: AWS, GCP, Ansible, Terraform, Docker, Continuous Integration
          </li>
          <li>
            Work process: agile, kanban, story writing, technical writing, documentation
          </li>

          <br />

          <h2> Work History </h2>
          <li>
            Senior Software Developer - TELUS Digital - Checkout - 2016 - now
            <ul>
              <li>
                Led development of a large scale checkout application, unifying TELUS products and services into a single funnel, and serving roughly 100,000 requests per day.
              </li>
              <li>
                Iteratively built and shipped UI features in React.js and Node.js that increased conversion rates by over 500%.
              </li>
              <li>
                Proposed accepted architecture solutions that lead to proper minimalist software designs.
              </li>
            </ul>
          </li>
          <li>
            DevOps - TELUS Digital - 2014
            <ul>
              <li>
                Integrated TELUS’s first continuous integration pipeline by advocating for Continuous Delivery practices which increased the rate of safe code deployments per week.
              </li>
              <li>
                Built AWS infrastructure using Ansible, Terraform, Docker to standardize configuration and automated deployments for hundreds of TELUS micro-sites.
              </li>
              <li>
                Built monitoring tools to track uptime, alert on issues so that developers can respond to failures in time.
              </li>
            </ul>
          </li>

          <br />

          <h2> Past Projects </h2>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='http://kkwoker.io/robot-music.pdf'>
              Neural Network Music Synthesizer
            </a>
            <ul>
              <li>
                Trained a recurrent neural network on MIDI files to synthesize musical sequences and presented in a showcase.
              </li>
            </ul>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='http://kkwoker.io/pun-classification.pdf'>
              Pun Classification
            </a>
            <ul>
              <li>
                Trained a model to locate and classify puns in English sentences and presented in a showcase.
              </li>
            </ul>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/kkwoker/simple-blockchain'>
              Simple Blockchain
            </a>
            <ul>
              <li>
                Built a simplified blockchain in GoLang by implementing the hashing algorithms and replicating proof of work.
              </li>
            </ul>
          </li>
          <li>
            MovieLens Ratings
            <ul>
              <li>
                Gathered, cleaned and analyzed data to find correlating features in movie ratings that possibly led to the movie’s success and predicted profitability from plot summaries using classification techniques.
              </li>
            </ul>
          </li>
          <li>
            <a href='/checkout-demo'> Unified Checkout </a>
            <ul>
              <li>
                Node.js and React.js application running on OpenShift serving over 100,000 requests per day.
              </li>
            </ul>
          </li>

          <br />

          <h2> Education </h2>
          <li>
            Simon Fraser University - Bachelor's of Computing Science concentrating in AI. GPA: 3.4
            <ul>
              <h3> Software Development </h3>
              <li> CMPT 275 - Software Engineering - Java, OOP, requirements gathering </li>
              <li> CMPT 383 - Programming Languages - Functional and concurrent programming in Haskell and GoLang </li>
              <li> CMPT 354 - Database Systems - SQL, NoSQL, clustering, database management </li>
              <li> CMPT 300 - Operating Systems - UNIX, Kernels, processes, threads, CPU scheduling, parallel computing </li>
              <li> CMPT 307 - Data Structures and Algorithms - Greedy algorithms, dynamic programming, graph algorithms, network flows, NP hard problems </li>

              <h3> Artificial Intelligence </h3>
              <li> CMPT 353 - Data Science - Python, numpy, pandas, matplotlib, inference, big data </li>
              <li> CMPT 412 - Computer Vision - Convolutional nets, facial detection, photometric stereo, object tracking, SIFT</li>
              <li> CMPT 726 - Machine Learning - Bayesian inference, neural networks, PyTorch, logistic regressions, perceptrons, classification</li>
              <li> CMPT 825 - Natural Language Processing - Language models, translation, grammars, topic modelling</li>
              <li> CMPT 880 - Deep Learning - Neural networks, GANs, VAEs </li>
            </ul>
          </li>
        </BioStyle>

        <div className='home-link'>
          <a href='/'> Return home </a>
        </div>
      </HomeStyle>
    )
  }
}

export default ResumePage
