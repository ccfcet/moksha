import React from 'react';

class BrandBar extends React.Component {
  render() {
    return (
      <div id="brand-bar">
        <h1 id="college-name">
          College of Engineering Trivandrum
        </h1>
        <style jsx>
          {`
            @import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

            #college-name {
              font-family: 'Open Sans',sans-serif;
              text-align: center;
              font-weight: 300;
              font-size: 18px;
              margin-top: 0px;
              margin-bottom: 0px;
              color: #505050;
              padding-top: 1.5vh;
            }
            `}
          </style>
        </div>
      )
    }
  }

  export default BrandBar
