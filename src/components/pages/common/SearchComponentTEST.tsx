import React, { Component } from 'react';

type HeadProps = Record<string, never>;

export class SearchComponent extends Component {
  constructor(props: HeadProps) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input type="text"></input>
        <button>Search</button>
      </div>
    );
  }
}
