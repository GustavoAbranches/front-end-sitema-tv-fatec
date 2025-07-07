const SelectCad = ({
  label,
  name,
  value,
  onChange,
  options = [],
  disabled = false,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col gap-1 text-white font-verdana w-full ${className}`}
    >
      <label htmlFor={name} className="text-sm sm:text-base">
        {label}:
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="text-black font-verdana w-full rounded-full px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCad;
