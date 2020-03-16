import React, {Component} from "react";
import Album from "./Album";

class AlbumList extends Component {
    constructor(props){
        super(props)
        this.state = {
            albumIsOpen: false
        };
    }
    render(){
        return(
            <ul>
                {this.props.albums.map((album) => {
                    return(
                        <Album 
                            key={album.id} 
                            id={album.id}
                            userId={album.userId} 
                            title={album.title} 
                        />
                    );
                })}
            </ul>
        )
    }
}

export default AlbumList;