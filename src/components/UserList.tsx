import React, { useState, useRef, useEffect } from "react";

const users = [
  { name: "Tobias", age: 22 },
  { name: "Larsen", age: 23 },
  { name: "Linda", age: 24 },
  { name: "Lars", age: 25 },
];

const UserList: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const [searchTerm, setSearchTerm] = useState("");
  const [userList, setUserList] = useState<string[]>(
    users.map((user) => user.name)
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    setName("");

    setUserList([...userList, name]);
  };

  const onSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSearch = () => {
    const foundUser = users.find(
      (user) => user.name.toLocaleLowerCase() === searchTerm.toLocaleLowerCase()
    );
    setUser(foundUser);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {};

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="spacer">
      <h1>User List</h1>

      <input
        value={name}
        type="text"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={onClick} disabled={name.length > 0}>
        Add
      </button>

      <div>
        <ul>
          {userList.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>

      <div className="spacer">
        <h3>Find user:</h3>
        <input
          type="text"
          ref={inputRef}
          value={searchTerm}
          onChange={onSearchTermChange}
        />

        <button onClick={onSearch}>Search</button>
      </div>

      {user && (
        <div className="spacer shadow" draggable onDragStart={onDragStart}>
          <div>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
