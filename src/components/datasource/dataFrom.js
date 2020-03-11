import React from "react";
import { connect } from "../../connect";
import "./dataForm.css";
import { useFormInput } from "../hooks/formInput";
import { addColor, addItem } from "../../actions/actions";

function DataForm(props) {
  //reuse of custom hooks

  const [inputValue, setInputValue] = useFormInput();
  const { addItem, addColor } = props;
  return (
    <div className="data-form">
      <input
        type="text"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button
        className="submit-btn"
        type="submit"
        onClick={() => {
          const item = inputValue;
          addItem(item);
          setInputValue("");
        }}
      >
        {" "}
        Add Item{" "}
      </button>
      <button
        className="submit-btn_color"
        type="submit"
        onClick={() => {
          const color = inputValue;
          addColor(color);
          setInputValue("");
        }}
      >
        {" "}
        Add Color{" "}
      </button>
    </div>
  );
}
const mapActionsToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  addColor: item => dispatch(addColor(item))
});
export default connect(mapActionsToProps)(DataForm);
