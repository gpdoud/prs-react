import React, { Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import Menu from '../../Menu';
import './Userdetail.css';

class Userdetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoaded: false,
            error: null
        }
    }
    
    init() {
        // const [queryParameters] = useSearchParams();
        // let id = queryParameters.get("id");
        fetch(`http://localhost:5000/api/users/${this.id}`)
        .then(res => res.json())
        .then(
            (result) => {
                console.debug("Sucessful AJAX call!", result);
                this.setState({ 
                    isLoaded: true,
                    user: result
                });
            },
            (error) => {
                this.setState({
                    error,
                    isLoaded: false
                });
            }
            );
        }
        
    componentDidMount() {
        this.init();
    }

    render() {
        // const [queryParameters] = useSearchParams();
        // const id = queryParameters.get("id");
        const isLoaded = this.state.isLoaded;
        const error = this.state.error;
        const user = this.state.user;
        if(error) { 
            console.error(error);
            return <p>Error</p>
        } else if(!isLoaded) {
            return <p>Loading ...</p>
        } else {
            return (
                <Fragment>
                    <Menu />
                    {/* </Fragment> //Link to={"/user/create"}>Create New</Link> */}
                    <table className="table table-sm">
                        <tbody>
                            <tr>
                                <td>Id</td>
                                <td>{user.id}</td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>{user.username}</td>
                            </tr>
                        </tbody>
                    </table>
                </Fragment>
            )
        }
    }
    
}

export default Userdetail;