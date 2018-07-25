import React from 'react'
import Card from '../../simple/college_contact_card'
import Grid from '@material-ui/core/Grid'
import {Container,Row,Col} from 'reactstrap'
 
const activities = [
  {
    "activityName": "IEEE",
    "image": "../../../static/images/ieee.jpg",
    "activityDescription": "The Institute of Electrical and Electronics Engineers (IEEE) is a professional association with its corporate office in New York City and its operations center in Piscataway, New Jersey. It was formed in 1963 from the amalgamation of the American Institute of Electrical Engineers and the Institute of Radio Engineers.",
    "title": "IEEE Logo"
  },
  {
    "activityName": "ISTE",
    "image": "../../../static/images/iste.jpg",
    "activityDescription": "The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country with the motto of Career Development of Teachers and Personality Development of Students and overall development of our Technical Education System.",
    "title": "ISTE Logo"
  },
  {
    "activityName": "NSS",
    "image": "../../../static/images/nss.jpg",
    "activityDescription": "NSS Technical cell unit no.147 of this college originally under University of Kerala, is at present functioning under the Directorate of Technical Education. From 2015 NSS Technical cell has granted anther NSS unit (Unit no 261). The various activities of the unit include blood donation, planting of trees, conducting legal awareness classes, personality development programmes, surveys for adopted village, cleaning and other constructive activities.",
    "title": "NSS Logo"
  },
  {
    "activityName": "BAJA - Herakles",
    "image": "../../../static/images/baja.png",
    "activityDescription": "Baja is a design and fabrication competition which is conducted all over the world. In India, students from various colleges from across the nation, design and build their own ATV, which is tested in off-road conditions. Baja has grown into one of the most prestigious engineering events in India and has proved to be a battle of dexterity and diligence.",
    "title": "BAJA Logo"
  },
  {
    "activityName": "ISNT",
    "image": "../../../static/images/isnt.png",
    "activityDescription": "The ISNT student chapter at CET was formally inaugurated by Dr. J. David, Principal of CET, on the 17th of August, 2017, in the presence of Sri. G. Levin, chairman of ISNT Trivandrum Chapter and other executive members of ISNT Trivandrum Chapter. With joint collaboration between Civil and Mechanical departments of the college, various programmes have been conducted under the banner of ISNT.",
    "title": "INST Logo"
  },
  {
    "activityName": "IPR Cell",
    "image": "../../../static/images/ipr.png",
    "activityDescription": "IPR cell is functioning in the College (In the main building near the Hostel Office, Room No. 101) from July 2010 onwards. As per the Proceedings No. L4/19813/10/DTE Thiruvananthapuram dated 26/05/2010, The IPR cell is supported by Patent Information centre (PIC) – Kerala, Kerala State Council for Science, Technology & Environment (KSCSTE), Govt. of Kerala. Dr Anjan R Nair, Assistant Professor, Department of Mechanical Engineering is the coordinator of the IPR cell.",
    "title": "IPR Logo"
  },
  {
    "activityName": "Environmental Club",
    "image": "../../../static/images/eco.jpg",
    "activityDescription": "The Environmental Club has done excellent work in nature conservation activities at College of Engineering, Trivandrum. The club mainly concentrates on enhancing the Greenery and conserving and documenting the bio-diversity of the campus. ",
    "title": "Environmental club Logo"
  },
  {
    "activityName": "ENCRESE",
    "image": "../../../static/images/encrese.jpg",
    "activityDescription": "ENCRESE stands for Engineers’ Crew for Society and Environment. It is a collective formed by students of CET who were brought to gether by National Service Scheme (NSS) unit at the college.The forum mainly focuses on improving skill and knowledge of engineering students through finding solutions to real-time problems suffered by society and major threats to the environment.",
    "title": "ENCRESE Logo"
  },

  {
    "activityName": "IIPC",
    "image": "../../../static/images/iipc.jpg",
    "activityDescription": "The Industry Institute Partnership Cell of College of Engineering Trivandrum provides a platform for both the students as well as faculty members to be aware of industry expectations of skill sets required for students and faculty to meet the global challenges. The cell enables students to be aware of the lacunae in their skills and provides an opportunity to upgrade them. It also enables Faculty to be aware of industry expectations & train students to meet these expectations. ",
    "title": "IIPC Logo"
  },
  {
    "activityName": "EDC",
    "image": "../../../static/images/edc.jpg",
    "activityDescription": "An Entrepreneurship Development Cell (EDC – CET) is functioning in the college with the intention of nurturing entrepreneurship skills of the students. The cell provides a platform for the students to pursue entrepreneurial activities and also provide assistance to potential entrepreneurs. With the prime goal of developing responsible innovators out of engineers, the EDC strives to assist every aspiring entrepreneur on every single step.",
    "title": "EDC Logo"
  },
  {
    "activityName": "Kerala Education Grid",
    "image": "",
    "activityDescription": "Kerala Education Grid (KEG) project of the Department of Higher Education, Govt. of Kerala, has its operations centre located at IIITM-K, Park Centre, Technopark Campus. College of Engineering, Trivandrum is one of the Resource Centers (EGRC - CET) of the Education Grid Project.",
    "title": "KEG Logo"
  },
  {
    "activityName": "EGRC - CET",
    "image": "../../../static/images/ergc.jpg",
    "activityDescription": "The main aim of this project is to improve the IT infrastructure & quality of education in technical institutions & engineering colleges of the state. The infra structure facilities for content development & posting are ready. The systems from SUN Micro systems and four PCs with content development software & tools have been installed at CET.",
    "title": "ERGC Logo"
  },

]

class ActivityPage extends React.Component{
  render(){
    return(
      <div id='activityPage'>
        <Container fluid={true}>
          <Row>
            {/* <div class="text-center"> */}
              {activities.map(activity => (

                <Col sm={{ size: 4, offset:0  }} className="text-center">
                  <Card activityName={activity.activityName} activityDescription={activity.activityDescription} image={activity.image} title={activity.title} />
                </Col>


          ))}
            {/* </div> */}
          </Row>

        <style jsx>
          {`
            #activityPage{
              padding-bottom:20px;

            }

            `}
          </style>
        </Container>
        </div>

      )
    }



  }

  export default ActivityPage
