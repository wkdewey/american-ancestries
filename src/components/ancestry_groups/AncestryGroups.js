import React from "react";

import Loading from "../Loading";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardLink,
  CardText,
  CardColumns,
} from "reactstrap";

const AncestryGroups = (props) => {
  if (props.ancestryGroups.length > 0) {
    return (
      <CardColumns>
        {props.ancestryGroups.map((ancestryGroup) => {
          return (
            <div className="ancestry_group" key={ancestryGroup.id}>
              <Card body>
                <CardBody>
                  <CardTitle>
                    <h3>
                      <CardLink>
                        <Link
                          key={ancestryGroup.id}
                          to={`/ancestry_groups/${ancestryGroup.id}`}
                        >
                          {ancestryGroup.attributes.name}
                        </Link>
                      </CardLink>
                    </h3>
                  </CardTitle>
                  <CardText>
                    {ancestryGroup.attributes.national_percent}% of US
                    population
                  </CardText>
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

export default AncestryGroups;
