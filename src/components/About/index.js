import { useState } from 'react';
import ReactCardFlip from 'react-card-flip'

import BaseballCardFront from './BaseballCardFront';
import BaseballCardBack from './BaseballCardBack';
import './index.css';

function AboutMe() {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setIsFlipped(!isFlipped);
  }

  return (
    <article className="box">
      <h2 className="title">About Me <br /></h2>
      <div className="row flex column">
        <p className="col-10">
          Accountant turned Web Developer <span>&copy;</span> May 2, 2021.
        </p>
        <p id='bio' className="col-10">
          I've found my passion in life. Coding satiates everything I
          look for in a position. It's challenging, logic based and always evolving keeping me in the
          perpetual state of being a student. I wake up every morning thrilled to code!
        </p>
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
          <BaseballCardFront handleClick={handleClick}>
          </BaseballCardFront>

          <BaseballCardBack handleClick={handleClick}>
          </BaseballCardBack>
        </ReactCardFlip>
      </div>
    </article>
  )
}

export default AboutMe;