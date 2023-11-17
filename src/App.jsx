import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './components/user/Index'
import Create from './components/user/Create'
import Details from './components/Details'
import Edit from './components/user/Edit'


export default function App() {
  return (
    <Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/user/index' element={<Index/>} />
    <Route path='/user/create' element={<Create/>} />
    <Route path='/user/:id' element={<Details/>}/>
    <Route path='user/edit/:id' element={<Edit/>}/>
    <Route path='*' element={<h2>user not found *</h2>} />
    </Routes>
  )
}
