import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OrderList from './pages/OrderList';
import OrderDetail from './pages/OrderDetail';
import Error404 from './pages/Error/404';

export default function Router() {
  return (
    <div className="os__contents">
      <Routes>
        <Route path="/" element={<OrderList />} />
        <Route path="/setting" element={<OrderDetail />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}
