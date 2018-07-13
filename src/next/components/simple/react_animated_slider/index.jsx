import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider.css';

const content = [
  {
    id: 1,
    title: 'Driving Innovation',
    description:
    'The International Conference on Control, Communication and Computing (IC4 2018) brings together researchers, practising engineers, faculty and students to drive innovation through knowledge sharing.',
    button: 'Discover',
    image: 'https://i.imgur.com/DCdBXcq.jpg',
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png',
  },
];

class ReactAnimatedSlider extends React.Component {
  render() {
    return(
      <div id="react-animated-slider-container">
        <Slider
          infinite="true"
          autoplay="4000"
          previousButton={null}
          nextButton={null}
          >
            {content.map(article => (
              <div
                key={article.id}
                className="slider-content"
                style={{
                  // background: `url('${article.image}') no-repeat center center`
                  background: '#0000e7',
                }}
                >
                  <div className="inner">
                    <h1>
                      {article.title}
                    </h1>
                    <p>
                      {article.description}
                    </p>
                    <button type="button">
                      {article.button}
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
            <style jsx>
              {`
                #react-animated-slider-container {
                  height: 100%;
                }
              `}
            </style>
          </div>
        )
      }
    }

    export default ReactAnimatedSlider
