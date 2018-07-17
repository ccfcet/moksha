import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider.css';

const content = [
  {
    id: 1,
    title: 'Humanizing Work',
    description:
    'The 16th International Conference on Humanizing Work and Work Environment(HWWE 2018) offers a platform for researchers, practitioners, manufacturers and academicians to discuss the ongoing research  across the world  and help exchange  ideas in addressing work related issues faced by human beings in all facets of daily activities.',
    button: 'Discover',
    image: './static/images/hwwe_2018.jpg',
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
                  background: `url('${article.image}') no-repeat center center`
                  // background: '#3f3f3f',
                }}
                >
                  <div className="inner">
                    <h1>
                      {article.title}
                    </h1>
                    <p>
                      {article.description}
                    </p>
                    <a href="http://hwwe2018.cet.ac.in/"><button type="button">
                      {article.button}
                    </button></a>
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
