/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Memo = (props) => {
  const {
    buttonLabel,
    className,
    title,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const editMemo = () => {
    const element = (
      <div>
        <Input type="textarea" name="text" id="exampleText" />
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('modalBody')
    );
  }

  return (
    <div>
      {<Button color="secondary" onClick={toggle}>{buttonLabel}</Button>}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.title}일자 기록</ModalHeader>
        <ModalBody id="modalBody">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={editMemo}>수정하기</Button>
          <Button color="secondary" onClick={toggle}>취소</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Memo;