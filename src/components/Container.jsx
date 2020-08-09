import React from "react"
import { container } from "../styles/Styles"

const Container = ({ children }) => {
  return <div style={container}>{children}</div>
}

export default Container
