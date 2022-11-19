import React from 'react';

function Error404() {
  return (
    <section className="error">
      <h2 className="blind">error 404페이지</h2>
      <p className="error__warning">
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        불편을 드려 죄송합니다.
      </p>
    </section>
  );
}

export default Error404;
