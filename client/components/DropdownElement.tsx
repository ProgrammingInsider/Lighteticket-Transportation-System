interface DropdownProps {
  label: string;
  name: string;
  options: { label: string; value: string | number }[];
  error?: string;
  required?: boolean;
  defaultValue?: string | number;
}

const DropdownElement = ({
  label,
  name,
  options,
  error,
  required = true,
  defaultValue,
}: DropdownProps) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="label-color font-size-label">{label}</label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue={defaultValue?.toString() ?? ''}
        className="input input-border input-text input-bg border-radius outline-none p-1.5 border border-gray-300 w-full"
      >
        {options.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <p className="error-message text-red-500">{error}</p>}
    </div>
  );
};

export default DropdownElement;
