import React, { useState, Component } from 'react';
import { TabContent, TabPane, Table, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import cx from 'classnames';
import s from './Dashboard.scss';
import './PersonalInfo.scss';
import axios from 'axios'

class PersonalInfo extends Component {
    constructor(props) {
        super(props);

        console.log(props.idsenior)

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            info: [],
            isLoading: true,
            idsenior: props.idsenior,
        };
        // this.componentDidMount.bind(this)
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab });
        }
    }

    getsafetycheckList = async () => {
        const {
            data: { safetycheck },
        } = await axios.get(`http://127.0.0.1:7000/management/safetylist/`,
            {
                params: {
                    idsenior: 1
                },
            })
        // console.log(this.state.idsenior)
        this.setState({ info: safetycheck, isLoading: false })
    }


    componentWillReceiveProps(){
        console.log(this.props.idsenior)
    }

    componentDidMount() {
        this.getsafetycheckList()
    }

    render() {
        const { info, isLoading, idsenior } = this.state
        console.log(info)
        return (
            <div id="dailyinfo">
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
                        {this.state.activeTab == 1 ? <h4> {this.props.name}
                            왜안되는데ㅍ{this.props.idsenior}</h4> : null}
                    </TabPane>
                    <TabPane tabId="2">
                        {this.state.activeTab == 2 ? <h4>Tab 2 Contents</h4> : null}
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