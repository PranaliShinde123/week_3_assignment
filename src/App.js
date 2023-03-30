import React from "react";
import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function App(props) {
  const inputstyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    background: "#e3e3e3e",
    border: "none",
    borderRadius: "4px 4px 0 0",
    boxSizing: "border-box",
    fontSize: 16,
    fontFamily: "Roboto-Regular"
  };

  const labelStyle = {
    position: "absolute",
    marginleft: 15,
    fontsize: 16,
    fontFamily: "Roboto-Regular",
    color: "#555"
  };

  const { type = "text", password = "password", label = "Label" } = props;
  const [focused, setFocused] = useState(false);
  const [isFilledIn, setFilledIn] = useState(false);
  return (
    <div className="App">
      <label>Code SandBox</label>
      <motion.label
        style={labelStyle}
        intial={{ y: 22 }}
        animate={{
          y:
            (focused && isFilledIn) ||
            (focused && !isFilledIn) ||
            (!focused && isFilledIn)
              ? 8
              : 22
        }}
      >
        {label}
      </motion.label>
      <input
        type={type}
        name="text"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) =>
          e.target.value !== "" ? setFilledIn(true) : setFilledIn(false)
        }
      />
      <input
        type={password}
        name="password"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
