import React from "react";
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom";

import Hit from "./Hit";


const Search = props => {
  const { algolia } = props;

  return (
    <div>
      {algolia &&
        algolia.appId && (
          <InstantSearch
            appId={algolia.appId}
            apiKey={algolia.apiKey}
            indexName={algolia.indexName}
          >
            <SearchBox translations={{ placeholder: "Search" }} />
            <Stats />
            <Hits hitComponent={Hit} />
          </InstantSearch>
        )}
    </div>
  );
};

export default Search;