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
            <Route exact path="/ancestryGroups/:ancestryGroupId">
              <AncestryGroup ancestryGroups={ancestryGroups} />
            </Route>
            <Route path="/ancestryGroups">
              <AncestryGroups ancestryGroups={ancestryGroups} />
            </Route>
            <Route path="/places/new">
              <PlaceInput
                initialGroups={placeAncestryGroups}
                // key={this.props.placeAncestryGroups}
              />
            </Route>
            <Route path="/places/:placeId">
              <Place places={places} />
              <PlaceComparison places={places} />
            </Route>
            <Route path="/places">
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
