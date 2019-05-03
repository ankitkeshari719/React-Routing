import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "../../components";
import { Posts, NewPost, FullPost} from "..";

class Blog extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
