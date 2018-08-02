import React from 'react'

import MainLayout from '../../components/derived/main_layout'
import Administration from '../../components/content/administration_page'

class ActivityPage extends React.Component{
  render(){
    return(
      <MainLayout>
        <Administration/>
      </MainLayout>
    )
  }
}

export default ActivityPage
