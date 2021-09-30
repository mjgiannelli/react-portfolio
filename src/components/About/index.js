import { useState } from 'react';
import ReactCardFlip from 'react-card-flip'

import BaseballCardFront from './BaseballCardFront';
import BaseballCardBack from './BaseballCardBack';

function AboutMe() {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <p>
        I've found my passsion in life. This career satiates everything I
        look for in a position. It's challenging, logic based and always evolving. I wake up every morning thrilled to code!
      </p>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <BaseballCardFront handleClick={handleClick}>
        </BaseballCardFront>

        <BaseballCardBack handleClick={handleClick}>
        </BaseballCardBack>
      </ReactCardFlip>
    </div>

    // <article className="box">
    //   <h2 className="title">About Me <br /> <span id="contributions">1,849 GitHub Contributions</span></h2>
    //   <div className="row flex column">
    //     <p className="col-10">
    //       Accountant turned Web Developer <span>&copy;</span> May 2, 2021.
    //     </p>
    //     <img id='selfie' src={require('../../assets/images/me-black-background-3.jpg').default}
    //       alt="professional selfie for Mark Giannelli" />
    //     <p id='bio' className="col-10">
    //       I've found my passsion in life. I would do this work for free. This career satiates everything I
    //       look for in a position. It's challenging, logic based and always evolving keeping me in the
    //       perpetual state of being a student. I wake up every morning thrilled to code!
    //     </p>
    //   </div>
    // </article>

  )
}

export default AboutMe;