import React from 'react';
import './newUser.css'

const NewUser = () => {
    return (
        <div className={"newUser"}>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="John"/>
                </div>
                <div className="newUserItem">
                    <label>Full name</label>
                    <input type="text" placeholder="John Smith"/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="John@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="John"/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+234 0896 393 031 "/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Lagos | Nigeria"/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name={"gender"} id={"male"} value={"male"}/>
                        <label htmlFor={"male"}>Male</label>
                        <input type="radio" name={"gender"} id={"female"} value={"female"}/>
                        <label htmlFor={"female"}>Female</label>
                        <input type="radio" name={"gender"} id={"other"} value={"other"}/>
                        <label htmlFor={"other"}>Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name={"active"} id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className={"newUserButton"}>Create</button>
            </form>
        </div>
    );
};

export default NewUser;