import React from 'react';
import PropTypes from 'prop-types';

import ActionBarInner from '../../simple/action_bar_inner';

class ActionBar extends React.Component {
  render() {
    return (
      <div id="action-bar">
        {<ActionBarInner actions={this.props.actions}/>}
        <style jsx>
          {`
            #action-bar {
              height: 100%;
              background: #fafafa;
              display: grid;
              grid-template-rows: 0.5fr 1.61803fr 0.5fr;
            }
            `}
          </style>
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
