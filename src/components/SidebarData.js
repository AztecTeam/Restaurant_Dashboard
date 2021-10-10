import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title : 'Dashboard',
        path : '/dashboard',
        icon : <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },

    {
        title : 'Orders',
        path : '/orders',
        icon : <FaIcons.FaReceipt/>,
        cName : 'nav-text'
    },

    

    
    {
        title : 'Logout',
        path : '/',
        icon : <IoIcons.IoIosLogOut/>,
        cName : 'nav-text'
    }

]
