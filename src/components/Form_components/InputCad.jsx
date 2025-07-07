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
      className={`flex flex-col gap-1 text-white font-verdana w-full ${className}`}
    >
      <label htmlFor={name} className="text-sm sm:text-base">
        {label}:
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value || ""}
        onChange={onChange}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className="text-black font-verdana w-full rounded-full px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
      />
    </div>
  );
};

export default InputCad;
