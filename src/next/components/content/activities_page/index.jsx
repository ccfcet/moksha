import React from 'react'
import Card from '../../simple/college_contact_card'
import Grid from '@material-ui/core/Grid';

const activities = [
  {
    "activityName": "IEEE",
    "image": "https://brand-experience.ieee.org/download/ieee-mb-blue-jpg/?wpdmdl=1946",
    "activityDescription": "The Institute of Electrical and Electronics Engineers (IEEE) is a professional association with its corporate office in New York City and its operations center in Piscataway, New Jersey. It was formed in 1963 from the amalgamation of the American Institute of Electrical Engineers and the Institute of Radio Engineers.",
    "title": "IEEE Logo"
  },
  {
    "activityName": "ISTE",
    "image": "http://www.isteonline.in/icons/logo.png",
    "activityDescription": "The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country with the motto of Career Development of Teachers and Personality Development of Students and overall development of our Technical Education System.",
    "title": "ISTE Logo"
  },
]

class ActivityPage extends React.Component{
  render(){
    return(
      <div id='activityPage'>
        <Grid container={true} spacing={8} style={{padding: 8}}>
          {activities.map(activity => (
            <Grid item xs={12} sm={6} lg={4} xl={3} style={{padding: 12}}>
              <Card activityName={activity.activityName} activityDescription={activity.activityDescription} image={activity.image} title={activity.title} />
            </Grid>
          ))}
        </Grid>
        <style jsx>
          {`
            #activityPage{
              padding-bottom:20px

            }

            `}
          </style>
        </div>

      )
    }



  }

  export default ActivityPage
