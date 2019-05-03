import React, { Component } from "react";
import axios from "../../../axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== this.props.match.params.id)
      ) {
        axios.get("/posts/" + this.props.match.params.id).then(response => {
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete("/posts/" + this.props.match.params.id).then(response => {});
  };

  render() {
    let post =
      this.state.loadedPost && this.props.match.params.id ? (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>Loading...!</p>
      );

    return post;
  }
}

export default FullPost;
