import { Slider } from 'keep-react';
import React from 'react';
const Filters = ({ onChange }) => {
  const [pages, setPages] = React.useState([0, 1200]);

  const handleChangePage = (ev) => {
    onChange((prevState) => ({ ...prevState, maxPrice: ev[1] }));
  };

  const handleChangeCategory = (ev) => {
    onChange((prevState) => ({ ...prevState, category: ev.target.value }));
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
        onChange={handleChangePage}
      />

      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      ></label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleChangeCategory}
      >
        <option selected>Selecciona un género</option>
        <option value="all">Todas</option>
        <option value="Terror">Terror</option>
        <option value="Ciencia ficción">Ciencia ficción</option>
        <option value="Zombies">Zombies</option>
        <option value="Fantasía">Fantasía</option>
      </select>
    </div>
  );
};

export default Filters;
