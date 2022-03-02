import React from 'react';
import './widgetsm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import img from '../../assets/istockphoto-1297832789-612x612.jpg'

const WidgetSm = () => {
    return (
        <div className={"widgetSm"}>
            <span className="widgetSmTitle">New Join Members </span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img
                        src={img} alt={""} className={"widgetSmImg"}/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Adeniyi jones</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src={img} alt={""} className={"widgetSmImg"}/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Adeniyi jones</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src={img} alt={""} className={"widgetSmImg"}/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Adeniyi jones</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src={img} alt={""} className={"widgetSmImg"}/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Adeniyi jones</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src={img} alt={""} className={"widgetSmImg"}/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Adeniyi jones</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSm;