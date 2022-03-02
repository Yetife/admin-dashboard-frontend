import React from 'react';
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ReportIcon from '@mui/icons-material/Report';
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div className={"sidebar"}>
           <div className={"sidebarWrapper"}>
               <div className={"sidebarMenu"}>
                   <h3 className={"sidebarTitle"}>Dashbord</h3>
                   <ul className={"sidebarList"}>
                       <Link to="/" className={"link"}>
                           <li className="sidebarListItem active">
                               <LineStyleIcon className="sidebarIcon"/>
                               Home
                           </li>
                       </Link>
                       <li className={"sidebarListItem"}>
                           <TimelineIcon className="sidebarIcon"/>
                           Analytics
                       </li>
                       <li className={"sidebarListItem"}>
                           <TrendingUpIcon className="sidebarIcon"/>
                           Sales
                       </li>
                   </ul>
               </div>
               <div className={"sidebarMenu"}>
                   <h3 className={"sidebarTitle"}>Quick Menu</h3>
                   <ul className={"sidebarList"}>
                       <Link to={"/users"} className={"link"}>
                           <li className="sidebarListItem">
                               <PersonOutlineIcon className="sidebarIcon"/>
                               Users
                           </li>
                       </Link>
                       <Link to="/products" className={"link"}>
                           <li className={"sidebarListItem"}>
                               <Inventory2Icon className="sidebarIcon"/>
                               Products
                           </li>
                       </Link>
                       <li className={"sidebarListItem"}>
                           <AttachMoneyIcon className="sidebarIcon"/>
                           Transactions
                       </li>
                       <li className={"sidebarListItem"}>
                           <AssessmentIcon className="sidebarIcon"/>
                           Reports
                       </li>
                   </ul>
               </div>
               <div className={"sidebarMenu"}>
                   <h3 className={"sidebarTitle"}>Notification</h3>
                   <ul className={"sidebarList"}>
                       <li className="sidebarListItem">
                           <MailOutlineIcon className="sidebarIcon"/>
                           Mail
                       </li>
                       <li className={"sidebarListItem"}>
                           <RateReviewIcon className="sidebarIcon"/>
                           Feedback
                       </li>
                       <li className={"sidebarListItem"}>
                           <ChatBubbleOutlineIcon className="sidebarIcon"/>
                           Messages
                       </li>
                   </ul>
               </div>
               <div className={"sidebarMenu"}>
                   <h3 className={"sidebarTitle"}>Staff</h3>
                   <ul className={"sidebarList"}>
                       <li className="sidebarListItem">
                           <AllInboxIcon className="sidebarIcon"/>
                           Manage
                       </li>
                       <li className={"sidebarListItem"}>
                           <TimelineIcon className="sidebarIcon"/>
                           Analytics
                       </li>
                       <li className={"sidebarListItem"}>
                           <ReportIcon className="sidebarIcon"/>
                           Sales
                       </li>
                   </ul>
               </div>
           </div>
        </div>
    );
};

export default SideBar;