import React from 'react'
import {List, Image, Divider} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import '../styles/Sidebar.css';

class AlbumSlide extends React.Component {

    showAlbumInfo = () => {
        this.props.showAlbum(this.props.albumInfo)
        this.props.history.push("/AlbumInfo")
    }

    render() {
        return (
            <React.Fragment>
                <List.Item id ="album-slide" onClick={this.showAlbumInfo}>
                    <Image 
                        href={this.props.albumInfo.uri}
                        id="album-image"
                        src={this.props.albumInfo.images[2] ? this.props.albumInfo.images[2].url : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/220px-Pictogram_voting_question.svg.png"}
                        alt="album-screenshot"
                    />
                    <List.Content>
                        <List.Header id="album-name">{this.props.albumInfo.name}</List.Header>
                    </List.Content>
                </List.Item>
                <Divider inverted/>
            </React.Fragment>
        )
    }
}

export default withRouter(AlbumSlide)