import React from "react"
import { Link } from "react-router-dom"
import { Menu } from "antd"

const Nav = (props) => {
  const { current } = props
  return (
    <div>
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to={`/public`}>Home</Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to={`/profile`}>Profile</Link>
        </Menu.Item>
        <Menu.Item key="protected">
          <Link to={`/protected`}>Protected</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Nav
