import React from "react";

import Link from "gatsby-link";

const Hit = props => {
  const { hit } = props;

  return (
    <Link to={hit.path}>
      {hit.objectID}
    </Link>
  );
};

export default Hit;