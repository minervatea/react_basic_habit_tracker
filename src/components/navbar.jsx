import React, { PureComponent } from "react";

export default class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <i className="navbar-log fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span class="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}
