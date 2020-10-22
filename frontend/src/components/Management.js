import React from 'react';
import Widget from './Widget/Widget';
import cx from 'classnames';
import ProtoTypes from 'prop-types';
import {Route, Link} from 'react-router-dom';
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

let listItems = []
for (let i = 1; i <= 50; i++) {
  listItems.push({ id: i, content: "관리자" + i })
}

const Management = (props) => {
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
            </div>
        }
        >
        <ScrollableList listItems={listItems}
            heightOfItem={30}
            maxItemsToRender={20}
            style={{ color: '#333' }}
        />
        </Widget>
        </Col>
        <Col sm={6}>
        <Widget className="Widget_widget__43yVm">
            <PersonalInfo personName={"관리자1"} />
        </Widget>
        </Col>
    </Row>
    </div>
  );
}

export default Management;