import styled from "styled-components";
import React from "react";
import Sidebar from "react-sidebar";
import PropTypes from "prop-types";
import { Title } from "../auth/Title";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SidebarLink = styled.div`
  color: white;
  padding: 12px 16px;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 4px;
  width: 245px;
  margin: 16px 0;
  ${props =>
    props.active &&
    "font-weight: 700;" +
      "background: #44f804; box-shadow: 0 3px 25px rgb(248, 168, 20, 0.3), 0 3px 6px rgb(248, 168, 20, 0.22);"}

  a:hover {
    color: inherit;
  }

  &:hover {
    color: #f8a814;
    ${props => props.active && "color: white;"}
    transform: scale(1.05);
  }
  transition: all 0.2s ease-in;
`;

const SidebarDivider = styled.div`
  height: ${props => props.size || 20}px;
`;

const SiderbarContentContainer = styled.div`
  height: 100%;
  background: #151523;
  margin-right: 20px;
  width: 240px;
`;

const routes = [
  {
    to: "/",
    title: "Dashboard"
  },
  {
    to: "/analytics",
    title: "Analytics"
  },
  {
    to: "/expenses",
    title: "expenses"
  },
  {
    to: "/borrowed",
    title: "Borrowed"
  },
  {
    to: "/events",
    title: "events"
  }
];

const SidebarContent = ({ pathname }) => {
  console.log(pathname);
  return (
    <SiderbarContentContainer>
      <SidebarDivider />
      <Title styles="font-size: 30px" />
      {routes.map(item => (
        <SidebarLink
          href="responsive_example.html"
          active={item.to === pathname}
        >
          <Link to={item.to}>{item.title}</Link>
        </SidebarLink>
      ))}
    </SiderbarContentContainer>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 30vh;
`;

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  content: {
    padding: "16px"
  }
};

const styles2 = {
  root: {
    fontFamily:
      '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 300
  },
  header: {
    // backgroundColor: "#44f804",
    color: "white",
    padding: "16px",
    fontSize: "1.5em"
  }
};

const SidebarTopTab = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  background: #151523;
  box-shadow: 0 3px 25px rgb(0, 0, 0, 0.3), 0 3px 6px rgb(0, 0, 0, 0.22);
`;

const mql = window.matchMedia(`(min-width: 800px)`);

const ChildrenContainer = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  ${props => !props.docked && "padding-top: 70px;"}
`;

const MenuIcon = styled.div`
  height: 70px;
  margin-left: 15px;
  display: flex;
  justify-items: center;
  align-items: center;
`;

export default class SidebarTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: mql.matches,
      open: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  mediaQueryChanged() {
    this.setState({
      docked: mql.matches,
      open: false
    });
  }

  toggleOpen(ev) {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const {
      location: { pathname }
    } = this.props;
    const sidebar = <SidebarContent pathname={pathname} />;
    const { docked } = this.state;
    console.log(this.props);

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
      styles: {
        sidebar: {
          zIndex: 4
        },
        overlay: { zIndex: 3 },
        content: {
          overflowY: "auto",
          paddingRight: 50,
          right: -50
        }
      },
      sidebarClassName: "sidebar"
    };

    return (
      <Sidebar {...sidebarProps}>
        {!docked && (
          <SidebarTopTab>
            <MenuIcon onClick={this.toggleOpen}>
              <FontAwesomeIcon icon={faBars} />
            </MenuIcon>
            <Title styles="font-size: 30px; padding: 10px; align-items: center" />
          </SidebarTopTab>
        )}
        <ChildrenContainer docked={docked}>
          {this.props.children}
        </ChildrenContainer>
      </Sidebar>
    );
  }
}

export const withSidebar = WrappedComponent => {
  return props => (
    <SidebarTest {...props}>
      <WrappedComponent {...props} />
    </SidebarTest>
  );
};
