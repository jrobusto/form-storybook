import React from 'react';
import '../styles/bootstrap.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import {TextAnswer} from '../components'

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
const TextAnswerExample1 = (
  <form class="container">
    <TextAnswer 
      question="How many potential states are there?"
    />
  </form>
)

const TextAnswerExample2 = (
  <div>
    <TextAnswer 
      id="1a"
      small
      number
      question="How many potential states are there?"
    />
    <TextAnswer
      id="1b"
      medium
      question="How many successful plans can be ordered from this diagram?"
    />    
    <TextAnswer
      id="1c"
      large
      question="Describe a successful plan"
    />    
    <TextAnswer
      id="1d"
      xlarge
      question="Describe an unsuccessful plan"
    />
  </div>
)
//storiesOf('TextAnswer', module).add('1 Question', () =>  TextAnswerExample1);
storiesOf('TextAnswer', module).add('Question Sizes', () =>   TextAnswerExample2);