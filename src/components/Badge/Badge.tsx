import React from 'react';

import './badge.scss';

class Badge extends React.Component {

    constructor(props:any){
        super(props);
    }  

    render(){
        return (
            <div className="tmh-badge">
                {this.props.children}
            </div>
        )
    }
}

export default Badge;