import React from 'react';
import { createPortal } from 'react-dom';
import './index.scss';

interface ModalProps {
  children?: React.ReactNode;

  /**
   * 弹窗是否展示
   */
  show: boolean;

  /**
   * 蒙层点击事件
   */
  onMaskClick?: Function;
}

/**
 * 弹窗组件
 */
export default function Modal(props: ModalProps) {
  const { children, show, onMaskClick } = props;

  /**
   * 蒙层点击事件
   */
  const handleMaskClick = () => {
    if (onMaskClick) onMaskClick();
  };

  const renderModal = () => {
    return (
      <div className="modal-mask" onClick={handleMaskClick}>
        {children}
      </div>
    );
  };

  if (!show) {
    return null;
  }

  return <>{createPortal(renderModal(), document.body)}</>;
}
