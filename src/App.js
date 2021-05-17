import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPlaces } from "./actions/placeActions";
import { fetchAncestryGroups } from "./actions/ancestryGroupActions";
import "./App.css";
import NavBar from "./components/NavBar";
// import PlacesContainer from "./containers/PlacesContainer";
// import AncestryGroupsContainer from "./containers/AncestryGroupsContainer";
import AncestryGroups from "./components/ancestry_groups/AncestryGroups";
import AncestryGroup from "./components/ancestry_groups/AncestryGroup";
import Place from "./components/places/Place";
import PlaceComparison from "./components/places/PlaceComparison";
import PlaceInput from "./components/places/PlaceInput";
import Places from "./components/places/Places";
import Home from "./components/Home";

class App extends Component {
  componentDidMount() {
    this.props.fetchPlaces();
    this.props.fetchAncestryGroups();
  }
  render() {
    const ancestryGroups = this.props.ancestryGroups;
    const places = this.props.places;
    const placeAncestryGroups = this.props.placeAncestryGroups;
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
            <Route path="/ancestry_groups/:ancestryGroupId">
              <AncestryGroup ancestryGroups={ancestryGroups} />
            </Route>
            <Route path="/ancestry_groups">
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
const mapStateToProps = (state) => {
  return {
    ancestryGroups: state.ancestryGroups,
    places: state.places,
    placeAncestryGroups: state.placeAncestryGroups,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaces: () => dispatch(fetchPlaces()),
    fetchAncestryGroups: () => dispatch(fetchAncestryGroups()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
