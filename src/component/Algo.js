import {React, useContext} from  "react";
import algoliasearch from "algoliasearch/lite";
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
import Hit from "./Hit";
import { EventContext } from "../App";

const searchClient = algoliasearch(
  "5DGIE39UOX",
  "68998baf7f780eeee9f1569b3394911b"
);

export default function Algo() {
  const { currentEvent } = useContext(EventContext);


  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName="contact_info">
        <Configure hitsPerPage={3} />
        <div className="search-panel">
          <div className="search-panel__filters">
            <Panel header="Search for contact">
              <RefinementList attribute="Search for contact information1" />
            </Panel>
          </div>

          <div className="search-panel__results">
            <SearchBox
              className="searchbox"
              translations={{
                placeholder: "",
              }}
            />
            <Hits hitComponent={Hit} />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}
