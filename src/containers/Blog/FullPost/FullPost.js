import React, { Component } from "react";
import axios from "../../../axios";

import "./FullPost.css";
import Notfound from "../../../components/Notfound/Notfound";

class FullPost extends Component {
  state = {
    loadedPost: null,
    error: false
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.id)
      ) {
        axios
          .get("/posts/" + this.props.match.params.id)
          .then(response => {
            const updatedPost = { ...response.data, author: "Ankit" };
            this.setState({ loadedPost: updatedPost });
          })
          .catch(error => this.setState({ error: true }));
      }
    }
  }

  deletePostHandler = () => {
    axios.delete("/posts/" + this.props.match.params.id).then(response => {
      console.log("Deleted Successfully", response);
    });
  };

  render() {
    let post = this.state.loadedPost ? (
      <div className="FullPost">
        <h1>{this.state.loadedPost.title}</h1>
        <p>{this.state.loadedPost.body}</p>
        <h4>{this.state.loadedPost.author}</h4>
        <div className="Edit">
          <button onClick={this.deletePostHandler} className="Delete">
            Delete
          </button>
        </div>
      </div>
    ) : (
      <p style={{ textAlign: "center" }}>Loading...!</p>
    );

    return this.state.error ? <Notfound /> : post;
  }
}

export default FullPost;
