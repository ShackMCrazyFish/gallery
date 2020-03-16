import React, {Component} from "react";

class Album extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        };
    }
    render(){
        const {id, userId, title, albumClick} = this.props;
        return(
            <div onClick={albumClick} dataid={id} datauserid={userId} className="gallery__item">
                <span>{title}</span>
            </div>
        )
    }
}

export default Album;