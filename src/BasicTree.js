import React, { useEffect } from "react";
import { boxedTree } from "d3-mitch-tree";
import "d3-mitch-tree/dist/css/d3-mitch-tree-theme-default.min.css";
import "d3-mitch-tree/dist/css/d3-mitch-tree.min.css";

export default function (props) {
  useEffect(() => {
    if (!props.data) {
      return;
    }
    new boxedTree()
      .setData(props.data)
      .setAllowFocus(false)
      .setElement(document.getElementById("visualisation"))
      .setIdAccessor(function (data) {
        return data.id;
      })
      .setChildrenAccessor(function (data) {
        return data.children;
      })
      .setBodyDisplayTextAccessor(function (data) {
        return `<img src="https://www.w3schools.com/html/pic_trulli.jpg" \>`;
      })
      .setTitleDisplayTextAccessor(function (data) {
        return data.name;
      })
      .initialize();
  }, [props.data]);

  return (
    <div>
      <div id="visualisation"></div>
    </div>
  );
}
