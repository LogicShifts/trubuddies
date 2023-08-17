export default function Header() {
  return (
    <header>
      <div id="hamburger-menu">
        <label>
          <input type="checkbox" />
          <span className="menu">
            {" "}
            <span className="hamburger"></span>{" "}
          </span>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Chat</a>
            </li>
            <li>
              <a href="#">ToDo</a>
            </li>
            <li>
              <a href="#">Diary</a>
            </li>
          </ul>
        </label>
      </div>
      <h1 id="trubuddies">TruBuddies</h1>
    </header>
  );
}
