import React, { Component } from 'react';
import cx from 'classnames';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    datasets: [{
        data: [300, 50, 100, 40],
        backgroundColor: [
            'red',
            'blue',
            'green',
            'orange'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#50FE50',
            '#FFCE56',
        ],
    }]
};

class Dashboard extends Component {
    state = {
        isLoading: true,
        safetycheck: [],
        seniorname: [],
        labels: [
            '긴급',
            '일반',
            '좋음',
            '미정'
        ],
        services: [
            'ARS',
            '직접통화',
            '방문'
        ],
        color: ['red', 'orange', 'blue', 'green']
    }

    getsafetycheckList = async () => {
        const {
            data: { sclist, seniorname },
        } = await axios.get("http://127.0.0.1:7000/management/safetycheck/")
        console.log(sclist, seniorname)
        this.setState({ safetycheck: sclist, seniorname: seniorname, isLoading: false })
    }

    componentDidMount() {
        // 데이터 로딩
        this.getsafetycheckList()
    }

    render() {
        const { safetycheck, isLoading, seniorname, labels, services, color } = this.state
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
                                </div>}>
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
                                    {isLoading ? 'Loading' : safetycheck.map((sc, i) => {
                                        return <tr>
                                            <td>{i}</td>
                                            <td>{seniorname[i]}</td>
                                            <td>{services[sc.service_idservice]}</td>
                                            <td>{sc.createdAt}</td>
                                            <td>
                                                <span className="py-0 px-1 rounded text-white" style={{background:color[sc.state_idstate-1]}}>{labels[sc.state_idstate - 1]}</span>
                                            </td>
                                            <td>고혈압/딩뇨</td>
                                            <td>
                                                <Link to={`/management/${i}`}>
                                                    <Button color="secondary">상세 정보 보기</Button>
                                                </Link>
                                            </td>
                                        </tr>
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