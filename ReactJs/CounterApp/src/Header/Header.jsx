import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router'
import App from '../App'
import Filter from '../FilterComponent/Filter'
import Dummy1 from '../DummyComponent/Dummy1'
import Dummy2 from '../DummyComponent/Dummy2'
import CounterAppNavLayout from '../CounterAppNavLayout'

function Header() {
  return (
    <header>
        <nav>
            <NavLink to={'/home'}>home</NavLink>
            <NavLink to={'/filter'}>Filter page</NavLink>
        </nav>
        
    </header>
  )
}

export default Header