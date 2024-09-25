import React from "react";

interface NoContentProps {
  name: string;
}

const NoContentComponent: React.FC<NoContentProps> = ({ name }) => (
  <div className="text-center py-10">
    <p className="text-gray-500">No {name} found.</p>
  </div>
);

export default NoContentComponent;
