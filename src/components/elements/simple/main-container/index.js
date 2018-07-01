import React from 'react'

class MainContainer extends React.Component {
  render() {
    return <div id="main-container">
      <style jsx>{`
        height: 100vh;
        width: 100vw;
      `}</style>
      {this.props.children}
    </div>
  }
}

export default MainContainer
