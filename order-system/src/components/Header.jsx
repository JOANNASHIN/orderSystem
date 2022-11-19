import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const { title } = props;
  const history = useNavigate();

  return (
    <header className="os__header">
      <button type="button" className="os__back" onClick={() => history(-1)}>
        <span>뒤로가기</span>
      </button>

      <h1 className="os__title">{title ?? '주문시스템'}</h1>
    </header>
  );
}

export default Header;
