import React from 'react'
import { Card, Row, Col } from 'antd'
import './text-content.css'
class HistoryContent extends React.Component {
    render() {
        return <div>
            <Card className="text-content">
                <Row>
                    <div className="title">
                        <Col span={24}>
                            <h1>CET at a glance</h1>
                            <p>
                                The College of Engineering, Trivandrum was established
                                in 1939 as the first Engineering College in the then
                                Travancore State. The first classes were started on 3rd
                                July 1939 during the reign of the Travancore King,
                                Sri Chithira Thirunal Balarama Varma and as the head of
                                the then Travancore state he deserves his share of
                                credit in the establishment of the college. Initially
                                the College was housed in the former office and bungalow
                                of the Chief Engineer (present PMG Office).
                                Maj T.H. Mathewman, a Britisher was the first Principal.
                                Started as a constituent College of Travancore
                                University, the College had an initial intake of 21
                                students each for Degree and Diploma courses in Civil,
                                Mechanical and Electrical branches. With the
                                establishment of the Directorate of Technical Education
                                in the late fifties, the College administration came
                                under the control of the Government of Kerala. The
                                College was shifted to the present sprawling
                                125 acres in 1960.
                            </p>
                            <p>
                                Over the years, the intake of students increased and as of now with eight
                                full-fledged departments offering eight undergraduate, 19 postgraduate and doctoral
                                programmes under the University of Kerala, the College has around 3500 students,
                                285 teaching staff and 290 non-teaching staff. B.Tech, B.Arch, M.Tech, M.Plan, MCA
                                and MBA and evening courses are also offered by the College.
                            </p>
                            <p>
                                Ever since the inception, the College has maintained its eminence as a leading
                                Engineering College in India. According to a study sponsored by the Department of
                                Science and Technology, government of India, in the early ninties, College of Engineering,
                                Trivandrum was among the top ten Engineering Colleges in India. The College ranks among the
                                top in the country in the quality of its graduates and the number of top jobs held by its graduates.
                                With such an eminence in the academic and curricular activities, the College is the most sought
                                after Engineering College by the applicants of Engineering degree programmes in the state.
                            </p>
                        </Col>
                    </div>
                </Row>
            </Card>

        </div>
    }
}

export default HistoryContent;