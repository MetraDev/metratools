import React, { useEffect, useState } from "react";

const NotFound = () => {
  //effecto para visualizar los paneles
  const [effect, setEffect] = useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {}, []);
  return <div><h2>NOT FOUND</h2></div>;
};

export default NotFound;
