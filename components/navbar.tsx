import Properties, { State } from ".";
import Link from "next/link";
import urlPatterns from "../urls";
import { Component, ReactNode } from "react";

class DarkModeToggle extends Component<Properties, State> {
  constructor(props: Object) {
    super(props);

    // State
    this.state = {
      checked: true,
    };

    // Binding
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render(): ReactNode {
    return (
      <div className="relative">
        <input
          type="checkbox"
          id={this.props.id}
          className="peer sr-only"
          onChange={this.onChange}
        />
        <button
          className="navbar-toggle lg:flex"
          onClick={() => {
            document.documentElement.classList.toggle("dark");
          }}
        >
          <label
            htmlFor={this.props.id}
            className="inline-flex items-center justify-center px-4 py-2"
          >
            {this.state.checked ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </label>
        </button>
      </div>
    );
  }
}

class Navbar extends Component<Properties, State> {
  constructor(props: Object) {
    super(props);

    // State
    this.state = {
      checked: true,
    };

    // Binding
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render(): ReactNode {
    return (
      <header className="mb-8">
        <nav className="navbar">
          <div className="flex w-full items-center justify-between gap-4 lg:w-auto">
            <span className="text-xl">
              <Link href={urlPatterns["home"]}>Youzarsiph</Link>
            </span>
            <div className="flex items-center gap-2">
              <DarkModeToggle id="dark" />
              <button
                type="button"
                onClick={this.onClick}
                className="navbar-toggle"
              >
                <label
                  htmlFor={this.props.id}
                  className="flex cursor-pointer items-center gap-2 px-4 py-2"
                >
                  Menu
                  {this.state.checked ? (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 8h16M4 16h16"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  )}
                </label>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <input
              type="checkbox"
              className="peer sr-only"
              id={this.props.id}
            />
            <ul className="navbar-menu">
              <li className="navbar-item">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <Link href={urlPatterns["home"]}>Home</Link>
              </li>
              <li className="navbar-item">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
                <Link href={urlPatterns["projects"]}>Projects</Link>
              </li>
              <li className="navbar-item">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <a href={urlPatterns["github"]}>Github</a>
              </li>
              <li className="navbar-item">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                <a href={urlPatterns["linkedin"]}>LinkedIn</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
