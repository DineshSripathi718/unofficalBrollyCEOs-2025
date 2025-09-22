import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

function CounterAppNavLayout() {
  return (
    <>
        <div>
            <NavLink to="/home/counter">Counter App</NavLink>
            <NavLink to="/home/dummy1">dummy1</NavLink>
            <NavLink to="/home/dummy2">dummy2</NavLink>
        </div>
        <Outlet />
    </>
  )
}

export default CounterAppNavLayout