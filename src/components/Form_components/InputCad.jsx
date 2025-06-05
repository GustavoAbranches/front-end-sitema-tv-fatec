const InputCad = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  disabled = false,
  placeholder = "",
  className = "",
}) => {
  return (
    <div
      className={`flex w-full flex-col text-white font-verdana ${className}`}
    >
      <label className="px-4 font-bold mb-1" htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className="text-black font-verdana w-full rounded-full px-4 py-1"
      />
    </div>
  );
};

export default InputCad;
