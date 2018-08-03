import React from 'react'

class PlainContent extends React.Component{
  render(){
    return(
      <div id='page'>
        <div id='page-title'>
          {this.props.plainContent.pageTitle}
        </div>
        <div id='page-content'>
          {this.props.plainContent.pageContent}
        </div>
        <style jsx>
          {`
            #page-title {
              grid-row : 1/2;
              height : 100%;
              padding-top : 50px;
              text-align : center;
              background-color : #0000e8;
              font-size : 50px;
              color : white;
              padding-bottom: 50px;
            }
            #page-content{
              padding: 20px;
            }
            #row{
              padding-bottom:32px;
            }
            `}
          </style>
        </div>
      )
    }
  }

  export default PlainContent
