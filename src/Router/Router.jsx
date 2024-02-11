import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import Page3 from '../Pages/Page3';
import Navbar from '../Component/Navbar';
import Home from '../Pages/Home';
import Error from '../Pages/Error'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<Error />} />
                    <Route path='/' element={<Navbar><Home /></Navbar>} />
                    <Route path='/page1' element={<Navbar><Page1 /></Navbar>} />
                    <Route path='/page2' element={<Navbar><Page2 /></Navbar>} />
                    <Route path='/page3' element={<Navbar><Page3 /></Navbar>} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
