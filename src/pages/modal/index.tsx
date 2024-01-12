import { useState } from 'react';
import Modal from '../../components/modal';
import './index.scss';

/**
 * 居中
 */
function Index() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const onModalMaskClick = () => {
    setShow(false);
  };

  return (
    <div className="page">
      <div className="show-modal-button" onClick={handleClick}>
        展示弹窗
      </div>
      <Modal show={show} onMaskClick={onModalMaskClick}>
        <div className="example-modal-container">
          <p>我是一个弹窗</p>
        </div>
      </Modal>
    </div>
  );
}

export default Index;
