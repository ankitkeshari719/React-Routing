import React, { Component } from "react";
import axios from "../../../axios";
import { Spinner, Post } from "../../../components";

class Posts extends Component {
  state = {
    posts: [],
    error: false,
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Ankit"
          };
        });
        this.setState({ posts: updatedPosts, isLoading: false });
      })
      .catch(error => {
        this.setState({ error: true, isLoading: false });
      });
  }

  postSelectedHandler = receivedId => {
    this.props.history.push("/posts/" + receivedId);
  };

  render() {
    let posts = this.state.isLoading ? (
      <Spinner />
    ) : (
      this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      })
      );

    return this.state.error ? (
      <p style={{ textAlign: "center" }}>Something went wrong!</p>
    ) : (
      <div className="Posts">{posts}</div>
    );
  }
}

export default Posts;
