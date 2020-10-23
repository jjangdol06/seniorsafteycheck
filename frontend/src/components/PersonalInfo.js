import React, { useState, Component } from 'react';
import { TabContent, TabPane, Table, Nav, NavItem, NavLink, Row, Button } from 'reactstrap';
import classnames from 'classnames';
import cx from 'classnames';
import s from './Dashboard.scss';
import './PersonalInfo.scss';
import axios from 'axios'

class PersonalInfo extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.componentWillReceiveProps.bind(this)
        // this.getsafetycheckList.bind(this)
        this.state = {
            activeTab: '1',
            info1: [],
            info2: [],
            info3: [],
            isLoading: true,
            labels: [
                '긴급',
                '일반',
                '좋음',
                '미정'
            ],
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab });
        }
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        this.getsafetycheckList(newProps)
    }

    getsafetycheckList = async (props) => {
        const {
            data: { safetycheck },
        } = await axios.get(`http://127.0.0.1:7000/management/safetylist/`,
            {
                params: {
                    idsenior: props.idsenior
                },
            })

        safetycheck.map((data) => {
            if (data.service_idservice == 1) {
                this.state.info1.push(data)
            } else if (data.service_idservice == 1) {
                this.state.info2.push(data)
            } else {
                this.state.info3.push(data)
            }
        })
        // this.setState({ info: safetycheck, isLoading: false })
        this.setState({ isLoading: false })
    }

    componentDidMount() {
        // this.getsafetycheckList()

    }

    render() {
        const { info1, info2, info3, isLoading, labels } = this.state
        console.log(info1)
        return (
            <div id="dailyInfo">
                <ul>
                    <li>이름:{this.props.name}</li>
                    <li>성별:여자</li>
                    <li>전화번호:010-2070-9389</li>
                </ul>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}>
                            ARS
              </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}>
                            전화
              </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}>
                            방문
              </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Table responsive borderless className={cx('mb-0', s.usersTable)}>
                                <thead>
                                    <tr>
                                        <th>일자</th>
                                        <th>상태</th>
                                        <th>기록</th>
                                    </tr>
                                </thead>
                                {info1.map((data) => {
                                    return <tbody>
                                        <tr>
                                            <td>{data.createdAt}</td>
                                            <td>
                                                <span className="py-0 px-1 bg-success rounded text-white">{labels[data.state_idstate - 1]}</span>
                                            </td>
                                            <td><Button>기록하기</Button></td>
                                        </tr>
                                    </tbody>
                                })}
                            </Table>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Table responsive borderless className={cx('mb-0', s.usersTable)}>
                                <thead>
                                    <tr>
                                        <th>일자</th>
                                        <th>상태</th>
                                        <th>기록</th>
                                    </tr>
                                </thead>
                                {info2.map((data) => {
                                    return <tbody>
                                        <tr>
                                            <td>{data.createdAt}</td>
                                            <td>
                                                <span className="py-0 px-1 bg-success rounded text-white">{labels[data.state_idstate - 1]}</span>
                                            </td>
                                            <td><Button>기록하기</Button></td>
                                        </tr>
                                    </tbody>
                                })}
                            </Table>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Table responsive borderless className={cx('mb-0', s.usersTable)}>
                                <thead>
                                    <tr>
                                        <th>일자</th>
                                        <th>상태</th>
                                        <th>기록</th>
                                    </tr>
                                </thead>
                                {info3.map((data) => {
                                    return <tbody>
                                        <tr>
                                            <td>{data.createdAt}</td>
                                            <td>
                                                <span className="py-0 px-1 bg-success rounded text-white">{labels[data.state_idstate - 1]}</span>
                                            </td>
                                            <td><Button>기록하기</Button></td>
                                        </tr>
                                    </tbody>
                                })}
                            </Table>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}


// class PersonalInfo extends Component {

//     constructor(props) {
//         super(props)
//         this.activeTab = 1
//         // this.setActiveTab =1

//         this.setActiveTab = tab => {
//             if (this.activeTab !== tab)
//                 this.activeTab = tab
//             console.log(this.activeTab)
//         }

//         this.toggle = tab => {
//             if (this.activeTab !== tab)
//                 this.setActiveTab(tab);
//             console.log('toggle')
//         }
//     }
//     // const[activeTab, setActiveTab] = useState('1');
//     // const[personName, setPersonName] = useState(props.personName);

//     render() {
//         const { activeTab, toggle } = this
//         return (
//             <div id="dailyInfo">
//                 <ul>
//                     <li>이름:{this.props.name}</li>
//                     <li>성별:여자</li>
//                     <li>전화번호:010-2070-9389</li>
//                 </ul>
//                 <Nav tabs>
//                     <NavItem>
//                         <NavLink
//                             className={classnames({ active: activeTab === '1' })}
//                             onClick={() => { toggle('1'); }}>
//                             전화
//                     </NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink
//                             className={classnames({ active: activeTab === '2' })}
//                             onClick={() => { toggle('2'); }}>
//                             방문
//                          </NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink
//                             className={classnames({ active: activeTab === '3' })}
//                             onClick={() => { toggle('3'); }} >
//                             ARS
//                          </NavLink>
//                     </NavItem>
//                 </Nav>
//                 <TabContent activeTab={activeTab}>
//                     <TabPane tabId="1" >
//                     { activeTab == 1 ? <h4>Tab 1 Contents</h4> : null }
//                         <Row>
//                             <Table responsive borderless className={cx('mb-0', s.usersTable)}>
//                                 <thead>
//                                     <tr>
//                                         <th>일자</th>
//                                         <th>상태</th>
//                                         <th>기록</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>2020.08.02 13:00</td>
//                                         <td>
//                                             <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
//                                         </td>
//                                         <td>기록하기</td>
//                                     </tr>
//                                     <tr>
//                                         <td>2020.08.02 13:00</td>
//                                         <td>
//                                             <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
//                                         </td>
//                                         <td>기록하기</td>
//                                     </tr>
//                                     <tr>
//                                         <td>2020.08.02 13:00</td>
//                                         <td>
//                                             <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
//                                         </td>
//                                         <td>기록하기</td>
//                                     </tr>
//                                     <tr>
//                                         <td>2020.08.02 13:00</td>
//                                         <td>
//                                             <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
//                                         </td>
//                                         <td>기록하기</td>
//                                     </tr>
//                                 </tbody>
//                             </Table>
//                         </Row>
//                     </TabPane>
//                     <TabPane tabId="2">
//                     { activeTab == 2 ? <h4>Tab 1 Contents</h4> : null }
//                         <Row>
//                             <Table responsive borderless className={cx('mb-0', s.usersTable)}>
//                                 <thead>
//                                     <tr>
//                                         <th>일자</th>
//                                         <th>상태</th>
//                                         <th>기록</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>2020.08.02 13:00</td>
//                                         <td>
//                                             <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
//                                         </td>
//                                         <td>기록하기</td>
//                                     </tr>
//                                     <tr>
//                                         <td>2020.08.02 13:00</td>
//                                         <td>
//                                             <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
//                                         </td>
//                                         <td>기록하기</td>
//                                     </tr>
//                                     <tr>
//                                         <td>2020.08.02 13:00</td>
//                                         <td>
//                                             <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
//                                         </td>
//                                         <td>기록하기</td>
//                                     </tr>
//                                     <tr>
//                                         <td>2020.08.02 13:00</td>
//                                         <td>
//                                             <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
//                                         </td>
//                                         <td>기록하기</td>
//                                     </tr>
//                                 </tbody>
//                             </Table>
//                         </Row>
//                     </TabPane>
//                     <TabPane tabId="3">
//                     { activeTab == 3 ? <h4>Tab 1 Contents</h4> : null }
//                         <Row>
//                             <Table responsive borderless className={cx('mb-0', s.usersTable)}>
//                                 <thead>
//                                     <tr>
//                                         <th>일자</th>
//                                         <th>상태</th>
//                                         <th>기록</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>2020.08.02 13:00</td>
//                                         <td>
//                                             <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
//                                         </td>
//                                         <td>기록하기</td>
//                                     </tr>
//                                     <tr>
//                                         <td>2020.08.02 13:00</td>
//                                         <td>
//                                             <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
//                                         </td>
//                                         <td>기록하기</td>
//                                     </tr>
//                                     <tr>
//                                         <td>2020.08.02 13:00</td>
//                                         <td>
//                                             <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
//                                         </td>
//                                         <td>기록하기</td>
//                                     </tr>
//                                     <tr>
//                                         <td>2020.08.02 13:00</td>
//                                         <td>
//                                             <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
//                                         </td>
//                                         <td>기록하기</td>
//                                     </tr>
//                                 </tbody>
//                             </Table>
//                         </Row>
//                     </TabPane>
//                 </TabContent>

//             </div>
//         )
//     }
// }

// class PersonalInfo extends Component {
//     static propTypes = {
//         personName: PropTypes.string.isRequired,
//         style: PropTypes.object
//     }

//     static defaultProps = {
//         personName: "",
//     }

//     constructor(props) {
//         super(props)
//         console.log(this.personName);
//     }

//     render () {
//         return (
//             <div style={{ marginTop:30 }}>
//                 <ul>
//                     <li>이름:{this.props.personName}</li>
//                     <li>성별:여자</li>
//                     <li>전화번호:010-2070-9389</li>
//                 </ul>

//             </div>
//         )
//     }
// }

export default PersonalInfo;