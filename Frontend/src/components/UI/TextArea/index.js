import Base from "../Base";

const TextArea = (
  {
    label,
    onChange,
    placeholder,
    value,
    name,
    ...elseProps
  }
)=>{
  return (
    <textarea
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      label={label}
      className = "m-auto w-11/12 h-40"
      name={name}
      {...elseProps}
    >
    </textarea>
  );
}

export default TextArea;
