import React, {Component} from 'react';
import {useState} from 'react';
import cx from 'classnames';
import ProtoTypes from 'prop-types';
//import {Link} from 'react-router-dom';
//import {connect} from 'react-redux';

import {
  Row,
  Col,
  Alert,
  Button,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbItem,
  Progress,
  Badge,
  ListGroup,
  ButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Table
} from 'reactstrap';

import Widget from './Widget/Widget';
import s from './Dashboard.scss';
import {Doughnut} from 'react-chartjs-2';
import Dates from './Dates';
import Kanban from './Kanban';

const data = {
	labels: [
		'긴급',
		'위험',
        '보통',
        '좋음'
	],
	datasets: [{
		data: [300, 50, 100, 40],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        '#50FE50'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        '#50FE50'
		]
	}]
};

class Dashboard extends Component {
    render() {
        return (
          <div className={s.root}>
            <Row>
              <Col sm={12}>
                <Widget className="Widget_widget__16nWC"
                title={
                    <div>
                    <h5 className="mt-0 mb-3">
                        <i className="fa fa-user mr-xs opacity-70" />{' '}
                        가입자 주요 현황
                    </h5>
                    </div>
                }
                >
                <Table responsive borderless className={cx('mb-0', s.usersTable)}>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>이름</th>
                        <th>서비스 유형</th>
                        <th>응답 시간</th>
                        <th>최근 응답 결과</th>
                        <th>전화번호</th>
                        <th>상세 정보</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>홍길동</td>
                        <td>자동응답 서비스</td>
                        <td>2020.08.02 13:00</td>
                        <td>
                        <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>010-2490-0000</td>
                        <td>고혈압/딩뇨</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>홍길동</td>
                        <td>자동응답 서비스</td>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-warning rounded text-white">보통</span>
                        </td>
                        <td>010-2490-0000</td>
                        <td>고혈압/딩뇨</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>홍길동</td>
                        <td>자동응답 서비스</td>
                        <td>2020.08.02 13:00</td>
                        <td>
                        <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                        </td>
                        <td>010-2490-0000</td>
                        <td>고혈압/딩뇨</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>홍길동</td>
                        <td>자동응답 서비스</td>
                        <td>2020.08.02 13:00</td>
                        <td>
                            <span className="py-0 px-1 bg-danger rounded text-white">위험</span>
                        </td>
                        <td>010-2490-0000</td>
                        <td>고혈압/딩뇨</td>
                    </tr>
                    </tbody>
                </Table>
                </Widget>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <Widget
                        title={
                            <div>
                                <h5 className="mt-0 mb-0">
                                    관리 현황
                                </h5>
                             <div className="pull-right mt-n-xs">
                                <Dates/>
                             </div>
                            </div>
                        }
                    >
                    <Doughnut data={data} />
                    </Widget>
                </Col>
                <Col sm={6}>
                    <Widget
                        title={
                            <div>
                                <h5 className="mt-0 mb-0">
                                    오늘의 방문 현황
                                </h5>
                            </div>
                        }
                    >
                    <Kanban />
                    </Widget>
                </Col>
            </Row>
          </div>
        );
    }
}

export default Dashboard;