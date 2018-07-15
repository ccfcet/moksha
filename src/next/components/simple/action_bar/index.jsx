import React from 'react';
import PropTypes from 'prop-types';

class ActionBar extends React.Component {
  render() {
    return (
      <div id="action-bar">
        <style jsx>
          {`
        #action-bar {
          height: 100%;
          display: grid;
          grid-template-rows: 0.5fr 1.61803fr 0.5fr;
          background: #fafafa;
        }

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
        }
        `}
        </style>
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
        </div>
      </div>
    );
  }
}

ActionBar.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string),
};

ActionBar.defaultProps = {
  actions: null,
};

export default ActionBar;
