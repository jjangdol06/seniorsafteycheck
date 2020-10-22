import React, { Component } from 'react';
import cx from 'classnames';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import {connect} from 'react-redux';

import {
    Row,
    Col,
    Button,
    Table
} from 'reactstrap';

import Widget from './Widget/Widget';
import s from './Dashboard.scss';
import { Doughnut } from 'react-chartjs-2';
import Dates from './Dates';
import Kanban from './Kanban';

const data = {
    labels: [
        '긴급',
        '일반',
        '좋음',
        '미정'
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
    state = {
        isLoading: true,
        safetycheck: [],
    }

    getsafetycheckList = async () => {
        const {
            data: { list },
        } = await axios.get("http://127.0.0.1:7000/management/safetycheck/")
        this.setState({ safetycheck: list, isLoading: false })
    }

    componentDidMount() {
        // 데이터 로딩
        this.getsafetycheckList()
    }

    render() {
        const { safetycheck, isLoading } = this.state
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
                        <th>상세 정보</th>
                        <th>운영 관리 페이지</th>
                    </tr>
                    </thead>
                    <tbody>
                    {isLoading ? 'Loading' : safetycheck.map((sc) => {
                        return sc.seniors.map((info, i) => {
                            console.log(info.name)
                            console.log(i)
                        return <tr>
                            <td>{i}</td>
                            <td>{info.name}</td>
                            <td>자동응답 서비스</td>
                            <td>2020.08.02 13:00</td>
                            <td>
                                <span className="py-0 px-1 bg-success rounded text-white">좋음</span>
                            </td>
                            <td>
                                <Link to="/management">
                                    <Button href="/management" color="link">상세 정보 보기</Button>
                                </Link>
                            </td>
                        </tr>
                        })
                    })}
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
                                        <Dates />
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