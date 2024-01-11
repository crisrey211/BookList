import { Slider } from 'keep-react';
import React from 'react';
const Filters = () => {
  const [pages, setPages] = React.useState([0, 1200]);

  const handleChange = (ev) => {
    setPages(ev);
  };

  return (
    <div style={{ width: '20rem', padding: '2rem' }}>
      <h2>Filtros</h2>
      <Slider
        range={true}
        min={0}
        max={1200}
        defaultValue={[0, 1200]}
        tooltip="top"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filters;
