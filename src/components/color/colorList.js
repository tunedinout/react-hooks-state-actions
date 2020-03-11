import React from "react";
import Color from "./color";
import { connect } from "../../connect";
import "./color.css";

function ColorList(props) {
  const { colors } = props;

  return (
    <div className="color-list">
      {colors.map(color => (
        <Color value={color} />
      ))}
    </div>
  );
}
const mapStateToProps = state => ({
  colors: state.colors
});
export default connect(mapStateToProps)(ColorList);
