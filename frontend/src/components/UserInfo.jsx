import React from "react";


function UserInfo(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <h6 className="card-subtitle mb-2 text-muted">{props.email}</h6>
            
            </div>
        </div>
    );
}

export default UserInfo;