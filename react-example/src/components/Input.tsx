import "./Input.css";

type InputProps = {
  label?: string;
  labelPosition?: string;
  type?: string;
};

function Button({ label, labelPosition, type }: InputProps) {
  return (
    <label
      className={`input-wrapper ${labelPosition === "top" && "with-top-label"}`}
    >
      {label && <strong>{label}</strong>}
      <input type={type}></input>
    </label>
  );
}

export default Button;
