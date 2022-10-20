import Properties, { State } from ".";
import Link from "next/link";
import urlPatters from "../urls";
import { Component, ReactNode } from "react";

class Navbar extends Component<Properties, State> {
  constructor(props: Object) {
    super(props);

    // State
    this.state = {
      collapsed: true,
    };

    // Binding
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render(): ReactNode {
    return (
      <header className="mb-8">
        <nav className="flex flex-col items-center justify-between border-b border-yellow-500 bg-yellow-400 px-6 py-4 shadow-lg lg:flex-row">
          <div className="flex w-full items-center justify-between lg:w-auto">
            <span className="text-xl font-bold">
              <Link href={urlPatters["home"]}>Youzarsiph</Link>
            </span>
            <button
              type="button"
              onClick={this.onClick}
              className="rounded border border-transparent hover:bg-white focus:border-yellow-500 focus:bg-white focus:ring focus:ring-white active:scale-95 lg:hidden"
            >
              <label
                htmlFor={this.props.id}
                className="flex cursor-pointer items-center gap-2 px-4 py-2"
              >
                Menu
                {this.state.collapsed ? (
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
          <div className="w-full lg:w-auto">
            <input
              type="checkbox"
              className="peer sr-only"
              id={this.props.id}
            />
            <ul className="mt-4 hidden flex-col items-start gap-4 rounded-xl border border-yellow-500 bg-white py-4 peer-checked:flex lg:mt-0 lg:flex lg:flex-row lg:items-center lg:border-none lg:bg-inherit lg:py-0">
              <li className="flex w-full items-center gap-2 rounded border border-transparent px-4 py-2 text-lg font-semibold hover:border-yellow-500 hover:bg-white active:scale-95 lg:w-auto">
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
                <Link href={"/"}>Home</Link>
              </li>
              <li className="flex w-full items-center gap-2 rounded border border-transparent px-4 py-2 text-lg font-semibold hover:border-yellow-500 hover:bg-white active:scale-95 lg:w-auto">
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
                <Link href={urlPatters["projects"]}>Projects</Link>
              </li>
              <li className="flex w-full items-center gap-2 rounded border border-transparent px-4 py-2 text-lg font-semibold hover:border-yellow-500 hover:bg-white active:scale-95 lg:w-auto">
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
                <a href={urlPatters["github"]}>Github</a>
              </li>
              <li className="flex w-full items-center gap-2 rounded border border-transparent px-4 py-2 text-lg font-semibold hover:border-yellow-500 hover:bg-white active:scale-95 lg:w-auto">
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
                <a href={urlPatters["linkedin"]}>LinkedIn</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
