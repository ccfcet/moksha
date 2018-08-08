import React from 'react'
import Department from '../../../components/content/department_page'
import MainLayout from '../../../components/derived/main_layout'
// import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import fetch from 'isomorphic-unfetch';
import config from '../../../config.json';
import Link from 'next/link'

class department extends React.Component {
  static async getInitialProps() {
    let data = {}
    let res;

    res = await fetch(config.apiLocation + '/public/information/entity_name/cet')
    data['collegeName'] = await res.json()

    res = await fetch(config.apiLocation + '/public/menu/cet/1')
    data['menu'] = await res.json()

    res = await fetch(config.apiLocation + '/public/academics/stream_types')
    data['stream_types'] = await res.json()

    return {
      mainLayout: {
        topBar: {
          brandBar: {
            collegeName: data.collegeName.data.entity_name
          },
          menuBar: {
            menu: data.menu
          }
        },
        stream_types: data.stream_types
      }
    }
  }

  render(){
    return(
      <MainLayout mainLayout={this.props.mainLayout}>
        <h3>
          Streams
        </h3>
        {this.props.mainLayout.stream_types.classes.map((stream_type) => {
          return (
            <div>
              <h4>{stream_type.stream_type_long}</h4>
              <Link href={"/academics/programmes/" + stream_type.stream_type_short}>
              <a><h5>{stream_type.stream_type_short}</h5></a>
            </Link>
          </div>
        )
      })}
    </MainLayout>
  )
}
}

export default department
