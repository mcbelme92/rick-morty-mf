const SearchInput = ({
  value,
  onChange,
  placeholder = "Search character...",
}) => {
  return (
    <div className="flex border-2 border-blue-500 rounded overflow-hidden">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          px-6
          py-2
          w-full
          bg-white
          text-black
          dark:bg-slate-800
          dark:text-white
          outline-none
        "
      />
    </div>
  );
};

export default SearchInput;
