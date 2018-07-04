import React from 'react'

class ActionBar extends React.Component {
  render() {
    return <div id="action-bar">
      <style jsx>{`
        #action-bar {
          height: 100%;
          display: grid;
          grid-template-rows: 0.5fr 1.61803fr 0.5fr;
          background: #f3f3f3;
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
        `}</style>
        <div id="action-bar-inner">
          <div id="action-bar-inner-container-one">

          </div>
          <div id="action-bar-inner-container-two">
            {this.props.actions
              .map((child, index) => (
                <div key={index} className="action-bar-inner-element">
                  {child}
                </div>)
              )}
          </div>
        </div>
      </div>
    }
  }

  export default ActionBar
