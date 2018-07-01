import MainContainer from '../../simple/main-container'
import MenuBar from '../../simple/menu-bar'
import ContentContainer from '../../simple/content-container'
import ActionBar from '../../simple/action-bar'

class App extends React.Component {
  render() {
    return <MainContainer>
      <MenuBar />
      <ContentContainer />
      <ActionBar />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }
        `}</style>
    </MainContainer>
  }
}

export default App
