import React, { useEffect, useState } from "react";

const HeaderPlan = () => {
  //effecto para visualizar los paneles
  const [effect, setEffect] = useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {}, []);
  return <div>Hola web</div>;
};

export default HeaderPlan;
