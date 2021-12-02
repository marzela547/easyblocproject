import './index.css';
const Base = (
  {
    type,
    name,
    id,
    className,
    placeholder,
    value,
    onChange,
    label,
    ...elseProps
  }
)=>{
  const curatedClassName = ["Input", className].join(' ');
  const _onChange = onChange || function(e){return null;};
  return (
    <div className={curatedClassName}>
        <input
          type={type}
          name={name}
          id={id}
          onChange={_onChange}
          value={value}
          placeholder={placeholder}
          {...elseProps}
        />
    </div>
  );
}

export default Base;
