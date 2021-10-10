import React,{useState,useEffect} from 'react';
import Orders from './pages/Orders';
import firebase from './Firebase';
//import './pages/Login.css'
import {Table} from 'react-bootstrap'


class Test extends React.Component{
  constructor(props){
    super(props)

    this.state = {orders : []}
    

  }
  componentDidMount(){
    firebase.database().ref("orders").on("value", snapshot => {
      let orders = [];
      snapshot.forEach(snap => {
        orders.push(snap.val());
      });
      this.setState({orders: orders});
     
    })

  }
  render(){
    return(
      <div className = 'container'>
      
     
     
      <Table striped bordered hover>
        <thead>
          <tr>
                  
            <th>Customer Contact</th>
            <th>Order name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Reference</th>
            <th>Total price</th>
            <th>Type</th>
          </tr>
        </thead>
        
        <tbody>
        {this.state.orders.map(data =>{

        

        var menu = data.order_menu.split('/')
        var price = data.order_price.split('/')
        var quantity = data.order_quantity.split('/')

        var len = quantity.length, i;
            for(i = 0; i < len; i++ ){
              quantity[i] && quantity.push(quantity[i]);
            }
            quantity.splice(0, len);
          

              return(
            <tr>
             
             
              <td>{data.email_addr}</td>
              <td>{menu}</td>
              <td> {price}</td>
              <td>{quantity + "\n" }</td>
              <td>{data.order_ref}</td>
              <td>{data.total_order_price}</td>
              <td>{data.order_type}</td>
            </tr>
              )
            })}
        </tbody>
      </Table>
      </div>
    )
  }
}
export default Test