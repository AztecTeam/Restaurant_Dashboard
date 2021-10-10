import React from 'react'
import Navbar from '../components/Navbar'
import './Login.css'
import Test from '../Testfirebase'
import Chart from './chart'
import Clock from './time'

function Dashboard() {
    
    return (

        <div>
         <Navbar/>
         <Clock/>
        
         <Test/>
        </div>
    )
}

export default Dashboard
