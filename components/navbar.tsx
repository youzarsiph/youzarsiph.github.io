import Properties from ".";
import Link from "next/link";
import urlPatters from "../urls";
import { Component, ReactNode } from "react";

class Navbar extends Component<Properties> {
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
              className="rounded border border-transparent px-4 py-2 hover:bg-white focus:border-yellow-500 focus:bg-white focus:ring focus:ring-white active:scale-95 lg:hidden"
            >
              <label htmlFor={this.props.id} className="cursor-pointer">
                Menu
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
              <li className="px-4 py-2 text-lg font-semibold">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="px-4 py-2 text-lg font-semibold">
                <Link href={urlPatters["projects"]}>Projects</Link>
              </li>
              <li className="px-4 py-2 text-lg font-semibold">
                <a href={urlPatters["github"]}>Github</a>
              </li>
              <li className="px-4 py-2 text-lg font-semibold">
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
