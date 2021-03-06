import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider.css';
import { Container, Row, Col } from 'reactstrap';

const content = [
  {
    id: 1,
    title: 'Humanizing Work',
    description:
    'The 16th International Conference on Humanizing Work and Work Environment(HWWE 2018) offers a platform for researchers, practitioners, manufacturers and academicians to discuss the ongoing research  across the world  and help exchange  ideas in addressing work related issues faced by human beings in all facets of daily activities.',
    button: 'Discover',
    image: './static/images/hwwe_2018.jpg',
  },
  {
    id: 2,
    title: 'Driving Innovation',
    description:
    'The 16th International Conference on Control, Communication and Computing (IC4 2018) offers a platform for researchers, practitioners, manufacturers and academicians to discuss the ongoing research  across the world  and help exchange  ideas in addressing work related issues faced by human beings in all facets of daily activities.',
    button: 'Discover',
    image: './static/images/quantum-768x411.jpg',
  },
  {
    id: 3,
    title: 'AJWTF 7',
    description:
    'The 7th Asian Joint Workshop on Thermophysics and Fluid Science' +
    ' organised by Department of Mechanical Engineering, College of '+
    'Engineering Trivandrum',
    button: 'Discover',
    image: './static/images/splash_(fluid_mechanics).jpg',
  }
];

class ReactAnimatedSlider extends React.Component {
  render() {
    return(
      <div id="react-animated-slider-container">
        <Container style={{height: '100%'}} fluid={true}>
          <Row style={{height: '100%'}}>
            <Col style={{paddingLeft: '0px', paddingRight: '0px'}}>
              <Slider
                infinite="true"
                autoplay="3000"
                // previousButton={null}
                // nextButton={null}
                >
                  {content.map(article => (
                    <div
                      key={article.id}
                      className="slider-content"
                      style={{
                        background: `url('${article.image}') no-repeat center center`,
                        backgroundSize: `cover`,
                        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#0000e8+0,0000ff+100 */
                        // background: 'rgb(0,0,232, 0.2)', /* Old browsers */
                        // background: '-moz-linear-gradient(top, rgba(0,0,232,1) 0%, rgba(0,0,255,1) 100%)', /* FF3.6-15 */
                        // background: '-webkit-linear-gradient(top, rgba(0,0,232,1) 0%,rgba(0,0,255,1) 100%)', /* Chrome10-25,Safari5.1-6 */
                        // background: 'linear-gradient(to bottom, rgba(0,0,232,1) 0%,rgba(0,0,255,1) 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                        // filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#0000e8\', endColorstr=\'#0000ff\',GradientType=0 )', /* IE6-9 */
                      }}
                      >
                        <div style={{
                          background: `rgba(1,1,1,0.8)`,
                          height: `100%`
                        }}>
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
                      </div>
                    ))}
                  </Slider>
            </Col>
          </Row>
            </Container>
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
