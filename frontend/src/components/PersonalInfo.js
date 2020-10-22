import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabContent, TabPane, Table, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import cx from 'classnames';
import s from './Dashboard.scss';
import './PersonalInfo.scss';

const PersonalInfo = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [personName, setPersonName] = useState(props.personName);

    const toggle = tab => {
        if(activeTab !== tab) 
            setActiveTab(tab);
    }

    return (
        <div style={{ marginTop:30 }}>
            <ul>
                <li>이름:{personName}</li>
                <li>성별:여자</li>
                <li>전화번호:010-2070-9389</li>
            </ul>
            <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            전화
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            방문
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            ARS
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
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
                    <tbody>
                    <tr>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>기록하기</td>
                    </tr>
                    <tr>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>기록하기</td>
                    </tr>
                    <tr>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>기록하기</td>
                    </tr>
                    <tr>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>기록하기</td>
                    </tr>
                    </tbody>
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
                    <tbody>
                    <tr>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>기록하기</td>
                    </tr>
                    <tr>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>기록하기</td>
                    </tr>
                    <tr>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>기록하기</td>
                    </tr>
                    <tr>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>기록하기</td>
                    </tr>
                    </tbody>
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
                    <tbody>
                    <tr>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>기록하기</td>
                    </tr>
                    <tr>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>기록하기</td>
                    </tr>
                    <tr>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>기록하기</td>
                    </tr>
                    <tr>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>기록하기</td>
                    </tr>
                    </tbody>
                </Table>
          </Row>
        </TabPane>
      </TabContent>

        </div>
    )
}

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