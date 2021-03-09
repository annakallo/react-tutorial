import React, { Component } from "react";
import {ToastContainer} from "react-toastify";
import http from '../services/httpService';
import config from '../config.json';
import 'react-toastify/dist/ReactToastify.css';
import {toast } from 'react-toastify';

class Home extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        // pending > resolved OR rejected
        const {data: posts} = await http.get(config.apiEndpoint);
        this.setState({posts});
    };

     handleAdd = async () => {
        const obj = { title: 'a', body: 'b'};
        const {data: post } = await http.post(config.apiEndpoint, obj);
        const posts = [post, ...this.state.posts];
        this.setState({posts});
    };

    handleUpdate = async post => {
        post.title = "UPDATED";
        const {data} = await http.put(config.apiEndpoint + '/' + post.id, post);
        // axios.patch(apiEndpoint + '/' + post.id,{title: post.title});
        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = {...post};
        this.setState({posts});
        console.log(data);
    };

    handleDelete = async post => {
        const originalPosts = this.state.posts;
        const posts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({posts});
        try {
            await http.delete(config.apiEndpoint + '/' + post.id);
        }
        catch (ex) {
            console.log('HANDLE DELETE CATCH BLOCK.');
            // ex.request
            // ex.response
            // Expected (404: not found, 400: bad request) - CLIENT ERRORS
            // - display a specific error message
            if (ex.response && ex.response.status === 404)
                toast('This post has already been deleted.');

            //
            // Unexpected (network down, server down, db down, bug)
            // - log them
            // - display a generic and friendly error message
            // alert('Something fail while deleting!');
            this.setState({posts: originalPosts});
        }

    };

    render() {
        return (
            <React.Fragment>
                <ToastContainer/>
                <button className="button is-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table is-fullwidth">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>
                                <button
                                    className="button is-info"
                                    onClick={() => this.handleUpdate(post)}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className="button is-danger"
                                    onClick={() => this.handleDelete(post)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Home;
