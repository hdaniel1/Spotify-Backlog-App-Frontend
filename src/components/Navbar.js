import React from 'react'
import {Menu, Image, Dropdown, Icon} from 'semantic-ui-react'
import '../styles/Navbar.css';
import {NavLink} from 'react-router-dom'


export default class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            activeItem: false, 
            innerText: "Search"
        }
    }
    //callback for search sidebar showing
    handleItemClick = () => {
        this.state.innerText === "Search" ?
        this.setState({ 
            activeItem: true,
            innerText: "Hide Search"
        }, () => this.props.showSidebar())
        :
        this.setState({ 
            activeItem: false,
            innerText: "Search"
        }, () => this.props.showSidebar())
    }

    render() {
        return (
            <React.Fragment>
                {!this.props.currentUser ? 

                <Menu icon='labeled' id="menu-bar" size="large" >
                    <Menu.Item  
                        href='http://localhost:3000/api/v1/login'
                        name='Login'
                        position="right" 
                    >
                    Login
                    </Menu.Item>
                </Menu>

                :

                <Menu id="menu-bar" size="large" >
                    <Menu.Item  
                        borderless="false"
                        name='Search' 
                        active={this.state.activeItem} 
                        onClick={this.handleItemClick}
                        position="left"
                    >
                    {this.state.innerText}
                    </Menu.Item>
                    <Menu.Item 
                        name='add-playlist' 
                        active={this.state.activeItem} 
                        onClick={this.handleItemClick}

                    >
                    <Icon name='plus'></Icon> 
                    Add New Playlist
                    </Menu.Item>
                    <Menu.Item 
                        name='add-playlist' 
                        active={this.state.activeItem} 
                        onClick={this.handleItemClick}

                    >
                    History
                    </Menu.Item>
                    <Menu.Item 
                        name='add-playlist' 
                        active={this.state.activeItem} 
                        onClick={this.handleItemClick}

                    >
                    Backlog
                    </Menu.Item>
                    <Menu.Item 
                        name='add-playlist' 
                        active={this.state.activeItem} 
                        onClick={this.handleItemClick}

                    >
                    Stats
                    </Menu.Item>
                    <Menu.Item 
                        name='add-playlist' 
                        active={this.state.activeItem} 
                        onClick={this.handleItemClick}

                    >
                    Home
                    </Menu.Item>
                    <Menu.Item
                        borderless="false"
                    >
                        
                        <Image 
                        href={this.props.currentUser.uri} 
                        id="profile-img" 
                        avatar 
                        src={this.props.currentUser.images[0].url} />
                    </Menu.Item>
                    <Dropdown closeOnEscape item simple text={this.props.currentUser.display_name.split(" ")[0]}>
                        <Dropdown.Menu>
                            <Dropdown.Item><NavLink onClick={this.props.logoutUser} to="/Login">Logout</NavLink></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>}
            </React.Fragment>
        )
    }
}


