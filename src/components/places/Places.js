import React, { useState } from "react";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardLink,
  CardText,
  CardColumns,
  Button,
} from "reactstrap";
import Like from "../Like";

const Places = ({ places }) => {
  const [placeLikes, setPlaceLikes] = useState([]);

  const handleLike = (id, event) => {
    const newLikes = [...placeLikes];
    newLikes[id] = newLikes[id] ? !newLikes[id] : true;
    setPlaceLikes(newLikes);
  };

  if (places.length > 0) {
    return (
      <CardColumns>
        {places.map((place) => {
          return (
            <div className="place" key={place.id}>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h3>
                      <CardLink>
                        <Link key={place.id} to={`/places/${place.id}`}>
                          {place.attributes.name}
                        </Link>
                      </CardLink>
                    </h3>
                  </CardTitle>
                  <CardText>
                    Population: {place.attributes.population.toLocaleString()}
                  </CardText>
                  <Button
                    onClick={(event) => {
                      handleLike(place.id, event);
                    }}
                  >
                    Like
                  </Button>
                  <Like liked={placeLikes[place.id] || false} />
                </CardBody>
              </Card>
            </div>
          );
        })}
      </CardColumns>
    );
  } else {
    return <Loading />;
  }
};
export default Places;
