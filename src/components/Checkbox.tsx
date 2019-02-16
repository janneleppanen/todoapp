import * as React from "react";

interface Props {
  checked: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  id: string;
}

const Checkbox = (props: Props) => {
  const { checked, onChange, id } = props;
  return (
    <div className="checkbox">
      <input
        id={id}
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} />
    </div>
  );
};

export default Checkbox;
