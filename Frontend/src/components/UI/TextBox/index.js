import Base from "../Base";

const TextBox = (
  {
    onChange,
    placeholder,
    value,
    className,
    name,
    label,
    ...elseProps
  }
)=>{
  return (
    <Base
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      label={label}
      className = {["textbox", className].join(" ")}
      name={name}
      {...elseProps}
    >
    </Base>
  );
}

export default TextBox;
