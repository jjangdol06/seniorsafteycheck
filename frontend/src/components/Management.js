import React, { Component, setProps } from 'react';
import Widget from './Widget/Widget';
import cx from 'classnames';
import ProtoTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import ScrollableList from './ScrollableList';
import PersonalInfo from './PersonalInfo';
import {
    Row,
    Col,
    Alert,
    Button,
    Table
} from 'reactstrap';
import s from './Management.scss';
import axios from 'axios'

let listItems = []

class Management extends Component {

    constructor(props){
        // console.log
        super(props)
    }

    state = {
        isLoading: true,
        seniorlist: [],
        seniorid: [],
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
        ]
    }

    getseniorlist = async () => {
        const {
            data: { seniorlist },
        } = await axios.get("http://127.0.0.1:7000/management/seniorlist/")
        seniorlist.map((sc) => {
            console.log(sc.name)
            this.state.seniorlist.push(sc.name)
            this.state.seniorid.push(sc.idsenior)})
            
            for (let i = 0; i < this.state.seniorlist.length; i++) {
                listItems.push({ id: i, content: this.state.seniorlist[i], idsenior: this.state.seniorid[i]})
              }
            console.log(this.state.seniorlist)
        this.setState({ isLoading: false })
    }

    componentDidMount() {
        // 데이터 로딩
        this.getseniorlist()
    }

    render() {
        const {seniorlist, seniorid} = this.state
        // PersonalInfo.setProps({ idsenior: seniorid[this.props.match.params.id] })
        return (
            <div className={s.root}>
                <Row>
                    <Col xs={6} sm={4} lg={3}>
                        <Widget className="Widget_widget__43yVm"
                            title={
                                <div>
                                    <h5 className="mt-0 mb-3">
                                        <i className="fa fa-user mr-xs opacity-70" />{' '}
                                             관리 명단 
                                    </h5>
                                </div>}>
                            <ScrollableList listItems={listItems}
                                // personName={}
                                heightOfItem={30}
                                maxItemsToRender={20}
                                style={{ color: '#333' }}
                            />
                        </Widget>
                    </Col>
                    <Col xs={12} sm={8}>
                        <Widget className="Widget_widget__43yVm">
                            <PersonalInfo key={this.props.location} name={seniorlist[this.props.match.params.id]} idsenior={seniorid[this.props.match.params.id]}/>
                        </Widget>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Management;