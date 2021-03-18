import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { FaAngellist } from "react-icons/fa";
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    title: 'Home',
    path: '/mainrep',
    icon: <FaAngellist />,
    cName: 'nav-text',
    
  },
 {
    title: 'DPT',
    path: '/view-department',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',

  },
  
  {
    title: 'Employee',
    path: '/view-employee',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Upraisal',
    path: '/view-upraisal',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Timesheet',
    path: '/view-timesheet',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Salary',
    path: '/view-salary',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Leave',
    path: '/view-leave',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Project',
    path: '/view-project',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Role',
    path: '/view-role',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
  
];

export const SidebarData2 = [
  {
    title: 'Home',
    path: '',
    icon: <FaAngellist />,
    cName: 'nav-text'
  },
  {
    title: 'Details',
    path: '/edetails',
    icon: <FaAngellist />,
    cName: 'nav-text'
  },
  {
    title: 'Upraisal',
    path: '/eupraisal',
    icon: <FaAngellist />,
    cName: 'nav-text'
  },
  {
    title: 'Salary',
    path: '/esalary',
    icon: <FaAngellist />,
    cName: 'nav-text'
  },
  {
    title: 'Timesheet',
    path: '/etimesheet',
    icon: <FaAngellist />,
    cName: 'nav-text'
  },
  {
    title: 'Leave',
    path: '/eleave',
    icon: <FaAngellist />,
    cName: 'nav-text'
  },
  {
    title: 'Project',
    path: '/eproject',
    icon: <FaAngellist />,
    cName: 'nav-text'
  },
  {
    title: 'Role',
    path: '/erole',
    icon: <FaAngellist />,
    cName: 'nav-text'
  }
  
];

