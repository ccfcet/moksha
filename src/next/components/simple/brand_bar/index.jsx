import React from 'react';
import Link from 'next/link'

class BrandBar extends React.Component {
  render() {
    return (
      <div id="brand-bar">
        <div id="brand-bar-element">
          <Link href="/">
          <a style={{textDecoration: 'none'}}>
            <h1 id="college-name">
              {this.props.brandBar.collegeName}
            </h1>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

          #brand-bar {
            grid-row-start: 2;
            grid-row-end: 3;
            height: 100%;
            display: table;
          }

          #brand-bar-element {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
          }

          #college-name {
            font-family: 'Open Sans',sans-serif;
            text-align: center;
            font-weight: 300;
            font-size: 2.9vh;
            margin-top: 0px;
            margin-bottom: 0px;
            color: #5d5d5d;
            // padding-top: 1.5vh;
          }

          @media screen and (max-height: 479px) {
            // override for small screens
            #college-name {
              font-size: 5.0vh;
            }
          }
          `}
        </style>
      </div>
    )
  }
}

export default BrandBar
