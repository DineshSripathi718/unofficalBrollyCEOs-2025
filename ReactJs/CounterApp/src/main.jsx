import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Filter from './FilterComponent/Filter.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// const Router = createBrowserRouter(
//   [{
//     path : "/",
//     element : <App />
//   },{
//     path : "/filter",
//     element : <Filter />
//   }]
// );

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/Header.jsx'
import CounterAppNavLayout from './CounterAppNavLayout.jsx'
import Dummy1 from './DummyComponent/Dummy1.jsx'
import Dummy2 from './DummyComponent/Dummy2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Routes>
          <Route path='/home' element={<CounterAppNavLayout />}>
            <Route path='dummy1' element={<Dummy1 />}></Route>
            <Route path='dummy2' element={<Dummy2 />}></Route>
            <Route path='counter' element={<App />}></Route>
          </Route>
          <Route path='/filter' element={<Filter />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
