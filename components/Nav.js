const Nav = ({ onClick, current }) => (
  <nav>
    <ul>
      <li>
        <button
          className={`${current === 1 ? "active" : "inactive"}`}
          onClick={() => onClick(1)}
        >
          Effect 1
        </button>
      </li>
      <li>
        <button
          className={`${current === 2 ? "active" : "inactive"}`}
          onClick={() => onClick(2)}
        >
          Effect 2
        </button>
      </li>
      <li>
        <button
          className={`${current === 3 ? "active" : "inactive"}`}
          onClick={() => onClick(3)}
        >
          Effect 3
        </button>
      </li>
    </ul>
  </nav>
);

export default Nav;
