import React from 'react';
import PropTypes from 'prop-types';

class ActionBarInner extends React.Component {
  render() {
    return (
      <div id="action-bar-inner">
        <div id="action-bar-inner-container-one" />
        <div id="action-bar-inner-container-two">
          {/* false-positive */}
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {this.props.actions.map(child => (
            <div key={child} className="action-bar-inner-element">
              {child}
            </div>))}
          </div>
          <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Open+Sans:400');

            #action-bar-inner {
              grid-row-start: 2;
              grid-row-end: 3;
              display: grid;
              grid-template-columns: 4.85409fr 1fr;
            }

            #action-bar-inner-container-one {
              height: 100%;
            }

            #action-bar-inner-container-two {
              height: 100%;
              display: table;
              // border-left: 1px solid #9e9e9e;
            }

            .action-bar-inner-element {
              display: table-cell;
              text-align: center;
              vertical-align: middle;
              padding-left: 15px;
              padding-right: 15px;
              font-family: 'Open Sans',sans-serif;
              font-weight: 300;
              font-size: 2.6vh;
            }

            @media screen and (max-height: 479px) {
              // override for small screens
              .action-bar-inner-element {
                  font-size: 4.8vh;
              }
            }
            `}</style>
          </div>
        );
      }
    }

    ActionBarInner.propTypes = {
      actions: PropTypes.arrayOf(PropTypes.string),
    };

    ActionBarInner.defaultProps = {
      actions: null,
    };

    export default ActionBarInner;
