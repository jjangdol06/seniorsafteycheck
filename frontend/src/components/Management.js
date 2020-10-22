import React from 'react';
import { Table , Row, Col } from 'reactstrap';
import Widget from './Widget/Widget';

const Management = (props) => {
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
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>홍길동</td>
            </tr>
            <tr>
                <td>2</td>
                <td>홍길동</td>
            </tr>
            <tr>
                <td>3</td>
                <td>홍길동</td>
            </tr>
            <tr>
                <td>4</td>
                <td>홍길동</td>
            </tr>
            </tbody>
        </Table>
        </Widget>
        </Col>
    </Row>
    </div>
  );
}

export default Management;