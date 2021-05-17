import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PlacesContainer from "./containers/PlacesContainer";
import AncestryGroupsContainer from "./containers/AncestryGroupsContainer";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            {/* <Route
              path="/places"
              render={(routerProps) => {
                return <PlacesContainer {...routerProps} />;
              }}
            />
            <Route
              path="/ancestry_groups"
              render={(routerProps) => {
                return <AncestryGroupsContainer {...routerProps} />;
              }}
            /> */}
            <Route exact path={`${this.props.match.path}/:ancestryGroupId`}>
              <AncestryGroup ancestryGroups={ancestryGroups} />
            </Route>
            <Route path={this.props.match.path}>
              <AncestryGroups ancestryGroups={ancestryGroups} />
            </Route>
            <Route path={`${this.props.match.path}/new`}>
              <PlaceInput
                initialGroups={placeAncestryGroups}
                key={this.props.placeAncestryGroups}
              />
            </Route>
            <Route path={`${this.props.match.path}/:placeId`}>
              <Place places={places} />
              <PlaceComparison places={places} />
            </Route>
            <Route path={this.props.match.path}>
              <Places places={places} />
            </Route>
            <Route path="">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
