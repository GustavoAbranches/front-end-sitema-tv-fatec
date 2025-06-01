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
    <div className={`flex flex-col text-white font-verdana ${className}`}>
      <label htmlFor={name}>{label}:</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="text-black font-verdana w-full rounded-full px-4 py-1"
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
