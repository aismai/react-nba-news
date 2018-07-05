import React, { Component } from "react";
import "./Layout.css";

import Header from "../../components/Header/Header";
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

class Layout extends Component {
  state = {
    showNav: false
  };

  toggleSideNav = action => this.setState({ showNav: action });

  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSideNav(false)}
          onOpenNav={() => this.toggleSideNav(true)}
        />
        {this.props.children}
        Footer
      </div>
    );
  }
}

export default Layout;
