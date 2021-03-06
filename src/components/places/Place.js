import React from "react";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Table } from "reactstrap";

const Place = (props) => {
  let { placeId } = useParams();
  if (props.places.length > 0) {
    const place = props.places.find((place) => place.id === placeId);
    let placeCard;
    if (place) {
      const groups = place.attributes.place_ancestry_groups;
      groups.sort((a, b) =>
        a.attributes.percent < b.attributes.percent ? 1 : -1
      );
      placeCard = (
        <div className="place">
          <Card>
            <CardBody>
              <CardTitle>
                <h3>{place.attributes.name}</h3>
              </CardTitle>
              <CardText>
                Population: {place.attributes.population.toLocaleString()}
              </CardText>
            </CardBody>
          </Card>
          <Table>
            <thead>
              <tr>
                <th>Ancestry</th>
                <th>Percent</th>
                <th>Relative to overall US population</th>
              </tr>
            </thead>
            {groups.map((group) => {
              return (
                <tr className="ancestry group" key={group.id}>
                  <td>{group.attributes.ancestry_group.name}</td>
                  <td>{group.attributes.percent}%</td>
                  <td>{group.attributes.relative_to_national}x</td>
                </tr>
              );
            })}
          </Table>
        </div>
      );
    } else {
      placeCard = "Place not found";
    }
    return <div>{placeCard}</div>;
  } else return <Loading />;
};

export default Place;
