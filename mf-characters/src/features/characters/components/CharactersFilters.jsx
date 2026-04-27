const CharactersFilters = ({ filters, onChange, onReset }) => {
  return (
    <div className="flex flex-wrap gap-4 p-6 justify-center">
      {/*   <input
        name="name"
        value={filters.name}
        onChange={onChange}
        placeholder="Search by name"
        className="border rounded-lg p-2"
      /> */}

      <select
        name="status"
        value={filters.status}
        onChange={onChange}
        className="border rounded-lg p-2"
      >
        <option value="">All status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        name="species"
        value={filters.species}
        onChange={onChange}
        className="border rounded-lg p-2"
      >
        <option value="">All species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>

      <button
        onClick={onReset}
        className="px-4 py-2 rounded-lg bg-success text-white"
      >
        Reset
      </button>
    </div>
  );
};

export default CharactersFilters;
