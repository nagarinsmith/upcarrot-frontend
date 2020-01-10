import styled from "styled-components";
import React from "react";
import Sidebar from "react-sidebar";
import PropTypes from "prop-types";
import { Title } from "../auth/Title";
import "./style.css";
import { Link } from "react-router-dom";
import { AuthLink } from "../auth/AuthLink";

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

const MaterialTitlePanel = props => {
  const rootStyle = props.style
    ? { ...styles2.root, ...props.style }
    : styles.root;

  return (
    <div style={rootStyle}>
      <div style={styles2.header}>{props.title}</div>
      {props.children}
    </div>
  );
};

const mql = window.matchMedia(`(min-width: 800px)`);

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

    console.log(this.props);

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a
            onClick={this.toggleOpen}
            href="#"
            style={styles.contentHeaderMenuLink}
          >
            =
          </a>
        )}
        <span> Responsive React Sidebar</span>
      </span>
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
      styles: {
        sidebar: {
          boxShadow:
            "0 3px 25px rgb(248, 168, 20, 0.3), 0 3px 6px rgb(248, 168, 20, 0.22)"
        }
      },
      sidebarClassName: "sidebar"
    };

    return (
      <Sidebar {...sidebarProps}>
        {this.props.children}
        {/* <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
            <p>
              This example will automatically dock the sidebar if the page width
              is above 800px (which is currently {this.state.docked.toString()}
              ).
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              placeat aspernatur alias quisquam inventore, quod earum illum
              laborum rerum neque veritatis nesciunt nulla saepe cumque harum!
              Cumque aut pariatur sunt. This functionality should live in the
              component that renders the sidebar. This way you&#39;re able to
              modify the sidebar and main content based on the responsiveness
              data. For example, the menu button in the header of the content is
              now {this.state.docked ? "hidden" : "shown"} because the sidebar
              is {!this.state.docked && "not"} visible.
            </p>
          </div>
        </MaterialTitlePanel> */}
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
