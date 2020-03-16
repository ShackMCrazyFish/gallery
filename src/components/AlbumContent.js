import React, {Component} from "react";
import Photo from "./Photo";
import Popup from "./Popup";

class AlbumContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            photos: [],
            selectedPhotoLink: null
        }
        this.handleOpenPopup = this.handleOpenPopup.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/albums/"+this.props.id+"/photos")
            .then(response => response.json())
            .then(json => this.setState({
                photos: json
            }));
    }
    render(){
        const {photos, selectedPhotoLink} = this.state;
        const photosList = photos.map(photo => {
            return(
                <li className="album-content__item" key={photo.id}><Photo openPopup={this.handleOpenPopup.bind(this, photo.url)} link={photo.url}/></li>
            )
        });
        return(
            <div>
                <ul className="album-content">
                    {photosList}
                </ul>
                {(selectedPhotoLink) ?
                    <Popup closePopup={this.handleClosePopup.bind(this)} link={selectedPhotoLink} />
                    :
                    null
                }
            </div>
        )
    }
    handleOpenPopup(selectedPhotoLink){this.setState({selectedPhotoLink})}
    handleClosePopup(){this.setState({selectedPhotoLink: null})}
}

export default AlbumContent;