import React, {Component} from "react";
import Album from "./Album";

import '../styles/App.css';
import AlbumContent from "./AlbumContent";

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            albums: [],
            isLoading: true,
            openAlbumId: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/albums/")
            .then(response => response.json())
            .then(json => this.setState({
                albums: json,
                isLoading: false
            }));
    }
    render(){
        const {openAlbumId, albums} = this.state;
        const albumsList = albums.map((album) => {
            return(
                <Album 
                    key={album.id} 
                    id={album.id}
                    userId={album.userId} 
                    title={album.title}
                    isOpen={openAlbumId === album.id}
                    albumClick={this.handleClick.bind(this, album.id)}
                />
            );
        });
        return(
            <div>
                {
                (!openAlbumId) ?
                    <div className="gallery__wrapper">
                        {albumsList}
                    </div>
                    :
                    <div className="album-content__wrapper">
                        <button onClick={this.handleBack}>Назад</button>
                        <AlbumContent id={openAlbumId} />
                    </div>
                }
            </div>
        )
    }
    handleBack(){this.setState({openAlbumId: null})}
    handleClick(openAlbumId){this.setState({openAlbumId})}
}

export default App;