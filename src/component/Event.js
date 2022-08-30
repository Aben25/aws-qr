import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Menu,
  SearchBox,
  Hits,
  Highlight,
  Configure,
  Panel,
  RefinementList,
} from "react-instantsearch-dom";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EventContext } from "../App";
import EventHit from "./EventHit";


const searchClient = algoliasearch(
  "5DGIE39UOX",
  "68998baf7f780eeee9f1569b3394911b"
);




const Event = () => {

  return (
    <InstantSearch searchClient={searchClient} indexName="event_info">
      <Configure hitsPerPage={3} />
      <div className="search-panel">
        <div className="search-panel__filters">
          <Panel header="Search for event">
            <RefinementList attribute="Search for Event" />
          </Panel>
        </div>

        <div className="search-panel__results">
          <SearchBox
            className="searchbox"
            translations={{
              placeholder: "",
            }}
          />
          <Hits hitComponent={EventHit} />
        </div>
      </div>
    </InstantSearch>
  );
};

export default Event;
