import React from 'react'
import {Menu, Sidebar, Divider, List} from 'semantic-ui-react'
import Searchbar from './Searchbar'
import {connect} from 'react-redux'
import '../styles/Sidebar.css';
import SpotifyWebApi from 'spotify-web-api-js';
import AlbumSlide from './AlbumSlide'
import _ from "lodash";

const spotifyApi = new SpotifyWebApi();

class SearchSidebar extends React.Component {
    constructor() {
        super() 
        this.state = {
            artistAlbums: []
        }
    }

    //get unique albums by name since Spotify sometimes returns dupes
    fetchArtistAlbums = (artistID) => {
        spotifyApi.getArtistAlbums(artistID)
        .then(albums => this.setState({artistAlbums: _.uniqBy(albums.items, 'name').filter(album => album.album_type === "album")}))
    }

    handleChange = (text) => {
        this.setState({searchText: text})
    }

    clearAlbums = () => this.setState({artistAlbums: []})

    render() {    
        return (
            <div id="sidebar">
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='push'
                        icon='labeled'
                        inverted
                        vertical
                        target={this.segmentRef}
                        visible={this.props.visible}
                        width='wide'
                    >
                        <Searchbar 
                            handleChange={this.handleChange} 
                            token={this.props.token} 
                            fetchAlbums={this.fetchArtistAlbums}
                            clearAlbums={this.clearAlbums}
                            albums={this.state.artistAlbums}
                        />
                        <Divider />
                        <List inverted relaxed celled>
                            {this.state.artistAlbums.map(album => <AlbumSlide key={album.id} albumInfo={album}/>)}
                        </List>     
                    </Sidebar>
                    <Sidebar.Pusher dimmed={this.props.visible}>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        token: store.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        test: "test"
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSidebar)