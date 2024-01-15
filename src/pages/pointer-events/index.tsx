import { useState } from 'react';
import './index.scss';

/**
 * pointer-events 属性使用，滚动穿透
 * https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events
 */
export default function PointerEvents() {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };

  return (
    <div className="scroll-page">
      <div className="scroll-page-container">
        <div className="botton" onClick={handleOnClick}>
          {open ? '关闭滚动穿透' : '打开滚动穿透'}
        </div>
        <p>遥夜何漫漫，空歌白石烂。</p>
        <p>宁戚未匡齐，陈平终佐汉。</p>
        <p>欃枪扫河洛，直割鸿沟半。</p>
        <p>历数方未迁，云雷屡多难。</p>
        <p>天人秉旄钺，虎竹光藩翰。</p>
        <p>侍笔黄金台，传觞青玉案。</p>
        <p>不因秋风起，自有思归叹。</p>
        <p>主将动谗疑，王师忽离叛。</p>
        <p>自来白沙上，鼓噪丹阳岸。</p>
        <p>宾御如浮云，从风各消散。</p>
        <p>舟中指可掬，城上骸争爨。</p>
        <p>草草出近关，行行昧前算。</p>
        <p>南奔剧星火，北寇无涯畔。</p>
        <p>顾乏七宝鞭，留连道傍玩。</p>
        <p>太白夜食昴，长虹日中贯。</p>
        <p>秦赵兴天兵，茫茫九州乱。</p>
        <p>感遇明主恩，颇高祖逖言。</p>
        <p>过江誓流水，志在清中原。</p>
        <p>拔剑击前柱，悲歌难重论。</p>
      </div>
      <div
        style={{ pointerEvents: open ? 'none' : 'auto' }}
        className="bottom-mask"
      ></div>
    </div>
  );
}
