import MainContainer from '../../simple/main-container'
import MenuBar from '../../simple/menu-bar'
import ContentInnerContainer from '../../simple/content-inner-container'
import ActionBar from '../../simple/action-bar'

let actions = ['Login', 'Settings']

class App extends React.Component {
  render() {
    return <div id="app">
      <MainContainer menuBar={<MenuBar />}
      contentInnerContainer={<ContentInnerContainer />} actionBar={<ActionBar actions={actions}/>}>
    </MainContainer>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

      body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        color: #5d5d5d;
      }
      `}</style>
    </div>
  }
}

export default App
