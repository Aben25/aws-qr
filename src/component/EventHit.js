import React from "react";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Configure,
  RefinementList,
  Panel,
  Pagination,
} from "react-instantsearch-dom";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useContext } from "react";
import { NameContext } from "./Index.js";
import { EventContext } from "../App.js";
import { useNavigate } from "react-router-dom";

export default function EventHit({ hit }) {

  const { setCurrentEvent, currentEvent } = useContext(EventContext);
    const navigation = useNavigate();



  return (
    <div>
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="Name" hit={hit} />
      </div>
      
      {hit.Name.length === 0 ? null : (
        <Button
          variant="secondary"
          onClick={() => {
            setCurrentEvent(hit);
                navigation("/qr");

          }}
        >
          Generate QR codeP
        </Button>
      )}
    </div>
  );
}
