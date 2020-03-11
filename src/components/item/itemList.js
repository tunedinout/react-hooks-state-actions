import React from "react";
import Item from "./item";
import { connect } from "../../connect";
import "./item.css";

function ItemList(props) {
  const { items } = props;

  console.log(props);
  return (
    <div className="item-list">
      <ul>
        {items.map(item => {
          return <Item value={item} />;
        })}
      </ul>
    </div>
  );
}
const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps)(ItemList);
