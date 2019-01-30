// BigOlGlossaryPage is a page of Machine Learning words and my own definitions.
// Many of the definitions seen online are hard to understand. This is meant to
// be my own paraphrasing of certain definitions.
//
// Future features:
//  1. UI Filtering of definitions based on text.
//  2. Content fetching. So I don't have to make many divs or write content here
import React from 'react';
import PropTypes from 'prop-types';


const definitions = [
  {
    phrase: 'Bag of words (BoW)',
    definition: `
      Bag of words is a method used in NLP to model corpuses.
      It is similar to taking all the words in the corpus and shaking them in a bag.
      The ordering of words are removed from features.`
  },
  {
    phrase: 'Perceptron Classification',
    definition: `
      Is a type of linear classification. TODO: Need to review this.
      Error function is a sum of the miss-classified examples.`
  }
];

class BigOlGlossaryPage extends React.Component {

  definitionList() {
    return (
      <ol>
        { definitions.map(def =>
          <li>
            <p> { phrase } </p>
            <p> { definition } </p>
          </li>
        )}
      </ol>
    );
  }

  render() {
    return (
      <h1> Big Ol' Glossary of Machine Learning </h1>
      { this.definitionList() }
    )
  }
}

BigOlGlossaryPage.propTypes = {
};

export default BigOlGlossaryPage;
