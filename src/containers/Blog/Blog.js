import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Header, Notfound } from "../../components";
import { Posts, NewPost, FullPost } from "..";

class Blog extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/posts" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts/:id" component={FullPost} />
          <Redirect from="/" exact to="posts" />
          <Route component={Notfound} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
