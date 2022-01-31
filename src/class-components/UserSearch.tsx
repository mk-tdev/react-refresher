import React from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[] | undefined;
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends React.Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onSearch = () => {
    const foundUser = this.props?.users?.find(
      (user) => user.name === this.state.name
    );
    this.setState({ user: foundUser });
  };

  render(): React.ReactNode {
    return (
      <div className="spacer">
        <div className="spacer">
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />

          <button onClick={this.onSearch}>Search</button>
        </div>

        {this.state.user && (
          <div className="spacer shadow">
            <div>
              <h2>{this.state.user.name}</h2>
              <p>{this.state.user.age}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserSearch;
