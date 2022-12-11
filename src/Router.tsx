import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddMovie from './pages/AddMovie';
import Dashboard from './pages/Dashboard';

export default function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />} />

                <Route path='/add' element={<AddMovie />} />
            </Routes>
        </>
    );
}
