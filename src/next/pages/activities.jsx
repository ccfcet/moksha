import React from 'react'
import MainLayout from '../components/derived/main_layout'
import Activity from '../components/content/activities_page'

class ActivityPage extends React.Component{
    render(){
        return(
            <MainLayout>
                <Activity/>
            </MainLayout>
        )
    }




}

export default ActivityPage