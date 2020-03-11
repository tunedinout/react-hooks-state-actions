import React from "react";
import { connect } from "../../connect";
import "./dataForm.css";
import { addColor, addItem } from "../../actions/actions";

class DataForm extends React.Component {
  //reuse of custom hooks
  state = {
    inputValue: "",
    setInputValue: newValue => {
      this.setState({ inputValue: newValue });
    }
  };

  render() {
    const { addItem, addColor } = this.props;
    return (
      <div className="data-form">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={event => this.state.setInputValue(event.target.value)}
        />
        <button
          className="submit-btn"
          type="submit"
          onClick={() => {
            const item = this.state.inputValue;
            addItem(item);
            this.state.setInputValue("");
          }}
        >
          {" "}
          Add Item{" "}
        </button>
        <button
          className="submit-btn_color"
          type="submit"
          onClick={() => {
            const color = this.state.inputValue;
            addColor(color);
            this.state.setInputValue("");
          }}
        >
          {" "}
          Add Color{" "}
        </button>
      </div>
    );
  }
}
const mapActionsToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  addColor: item => dispatch(addColor(item))
});
export default connect(mapActionsToProps)(DataForm);
