const InputElement = ({
  type = 'text',
  label,
  name,
  required = true,
  error,
  defaultValue,
}: {
  type?: string;
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  defaultValue?: string | number;
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="label-color font-size-label">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="input input-border input-text input-bg border-radius outline-none p-1 border border-gray-300 w-full"
        min={0}
      />
      {error && <p className="error-message text-red-500">{error}</p>}
    </div>
  );
};

export default InputElement;
