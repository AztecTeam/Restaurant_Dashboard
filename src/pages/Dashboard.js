import React from 'react'
import Navbar from '../components/Navbar'
import './Login.css'
import Test from '../Testfirebase'
import Orders from './Orders';


function Dashboard() {
    
    return (
        <div>
         <Navbar/>
        <div className = 'dashboard'>
        
       
            <table >

                <tr>
                    <th>Customer</th>
                    <th>Orders</th> 
                    <th>Price</th>
                    
                </tr>

                <tr>
                    <td>- JDiawaku</td>
                    <td>- sth chicken burger</td>
                    <td>- R85</td>
                </tr>
                <tr>
                    <td></td>
                    <td>- Waterford breakfast</td>
                    <td>- R85</td>
                </tr>
                <tr>
                    <td></td>
                    <td>- 2 Chicken & Haloumi Quesadilla</td>
                    <td>- R75</td>
                </tr>

            </table>
                
           
        </div>
        </div>
    )
}

export default Dashboard
