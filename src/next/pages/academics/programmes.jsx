import React from 'react'
import Department from '../../components/content/department_page'
import MainLayout from '../../components/derived/main_layout'
// import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import fetch from 'isomorphic-unfetch';
import config from '../../config.json';

class department extends React.Component {
  static async getInitialProps() {
    let data = {}
    let res;

    res = await fetch(config.apiLocation + '/public/information/entity_name/cet')
    data['collegeName'] = await res.json()

    res = await fetch(config.apiLocation + '/public/menu/cet/1')
    data['menu'] = await res.json()

    return {
      mainLayout: {
        topBar: {
          brandBar: {
            collegeName: data.collegeName.data.entity_name
          },
          menuBar: {
            menu: data.menu
          }
        }
      }
    }
  }

  render(){
    return(
      <MainLayout mainLayout={this.props.mainLayout}>

      </MainLayout>
    )
  }
}

export default department
