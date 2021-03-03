import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./ScoreTable.css";
import OverallTable from "./OverallTable";
import PersonalTable from "./PersonalTable";

// import axios from "axios";

function NormScoretable() {
  const dummynorm = {
    dummytopnorm: [
      {
        id: 1,
        username: "TomTom",
        score: 85,
        type: true,
        date: Date.now,
      },
      {
        id: 2,
        username: "Sally",
        score: 130,
        type: true,
        date: Date.now,
      },
      {
        id: 3,
        username: "typeking",
        score: 60,
        type: true,
        date: Date.now,
      },
      {
        id: 4,
        username: "newbytyper",
        score: 20,
        type: true,
        date: Date.now,
      },
      {
        id: 5,
        username: "john",
        score: 90,
        type: true,
        date: Date.now,
      },
      {
        id: 6,
        username: "TomTom",
        score: 100,
        type: true,
        date: Date.now,
      },
    ],
    dummytoppersonalnorm: [
      {
        id: 1,
        username: "TomTom",
        score: 38,
        type: true,
        date: "11/17/20",
      },
      {
        id: 1,
        username: "TomTom",
        score: 47,
        type: true,
        date: "11/18/20",
      },
      {
        id: 1,
        username: "TomTom",
        score: 29,
        type: true,
        date: "1/23/21",
      },
      {
        id: 1,
        username: "TomTom",
        score: 73,
        type: true,
        date: "2/14/21",
      },
      {
        id: 1,
        username: "TomTom",
        score: 85,
        type: true,
        date: Date.now,
      },
      {
        id: 1,
        username: "TomTom",
        score: 100,
        type: true,
        date: Date.now,
      },
    ],
  };

  // const [state, setState] = useState({ topnorm: [], topchaos: [] });
  console.log(dummynorm);
  // useEffect(() => {
  //   axios.get("/api/highscores").then((response) => {
  //     console.log(response);
  //     //check for what setState should be called on--might be response.data, etc
  //     setState(response);
  //   });

  return (
    <div>
      <Container className="scorecol ml-0 col-md-8 text-center">
        <Row className="justify-content-xs-left">
          <Col>
            <h1>Normal Mode!</h1>
            <h5>High Scores</h5>
            <h3>Overall</h3>
            {/* <OverallTable scores={state.topnorm} /> */}
            <OverallTable overall={dummynorm.dummytopnorm} />

            <h3>Personal</h3>
            {/* <PersonalTable scores={state.toppersonalnorm} /> */}
            <PersonalTable personal={dummynorm.dummytoppersonalnorm} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NormScoretable;