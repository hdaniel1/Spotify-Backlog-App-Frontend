import React from 'react'
import Album from '../components/Album'
import {Item, Button, Confirm, Transition, Card} from 'semantic-ui-react'
import {deleteUserAlbum} from '../redux/albumactions'
import {connect} from 'react-redux'

class BacklogPage extends React.Component {
    render() {
        return (
            <Card.Group id="playlist-albums-grid">
                {this.props.albums.map(album => {
                    return (
                        <Album key={album.id} albumInfo={album} deleteUserAlbum={this.props.deleteUserAlbum}/>
                    )
                })}
            </Card.Group>
        )
    }
}

  const mapDispatchToProps = (dispatch) => {
    return {
      deleteUserAlbum: (userAlbum) => dispatch(deleteUserAlbum(userAlbum))
    }
  }
  
  export default connect(null, mapDispatchToProps)(BacklogPage)