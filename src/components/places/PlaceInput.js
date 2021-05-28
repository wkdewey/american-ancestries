import React, { useState } from "react";
import { connect } from "react-redux";
import { addPlace } from "../../actions/placeActions";
import { fetchAncestryGroups } from "../../actions/ancestryGroupActions";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Loading from "../Loading";

const PlaceInput = ({ initialGroups = null }) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState(0);
  const [placeAncestryGroups, setPlaceAncestryGroups] = useState(initialGroups);

  if (initialGroups !== placeAncestryGroups)
    setPlaceAncestryGroups(initialGroups);
  const handleNameChange = (event) => setName(event.target.value);

  const handlePopulationChange = (event) =>
    setPopulation(parseInt(event.target.value));

  const handleGroupChange = (groups, id, event) => {
    let group = { ...groups.find((group) => group.ancestryGroupId === id) };
    group.population = parseInt(event.target.value);
    const idx = groups.findIndex((group) => group.ancestryGroupId === id);
    groups[idx] = group;
    setPlaceAncestryGroups(groups);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      name: name,
      population: population,
      place_ancestry_groups_attributes: placeAncestryGroups.map((group) => {
        return {
          ancestry_group_id: group.ancestryGroupId,
          population: group.population,
        };
      }),
    };
    this.props.addPlace(formData);
    this.props.fetchAncestryGroups();
    const newAncestryGroups = placeAncestryGroups.map((group) => {
      return { ...group, population: 0 };
    });
    setName("");
    setPopulation(0);
    setPlaceAncestryGroups(newAncestryGroups);
  };

  let groups;
  if (placeAncestryGroups) {
    groups = [...placeAncestryGroups];
  } else {
    groups = [];
    return <Loading />;
  }
  return (
    <div>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormGroup>
          <Label>
            Place name
            <Input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Total population
            <Input
              id="population"
              name="population"
              type="number"
              value={population}
              onChange={handlePopulationChange}
            />
          </Label>
        </FormGroup>
        {groups.map((group) => {
          return (
            <FormGroup key={group.ancestryGroupId}>
              <Label>
                {group.ancestryGroupName + " population"}
                <Input
                  id={"population " + group.ancestryGroupName}
                  name={"population " + group.ancestryGroupName}
                  type="number"
                  value={group.population}
                  onChange={(e) =>
                    handleGroupChange(groups, group.ancestryGroupId, e)
                  }
                />
              </Label>
            </FormGroup>
          );
        })}
        <Button type="submit"> Submit</Button>
      </Form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlace: (place) => dispatch(addPlace(place)),
    fetchAncestryGroups: () => dispatch(fetchAncestryGroups()),
  };
};
export default connect(null, mapDispatchToProps)(PlaceInput);
