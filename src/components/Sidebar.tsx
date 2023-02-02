/**
 * A example file from the React Router tutorial: https://reactrouter.com/en/main/start/tutorial 
 * (root.jsx)
 * This is the sidebar component. It contains the search form, the list of contacts,
 * and the "New" button.
 * 
 */

import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <>
     <div id="sidebar" className="border-solid border-2 border-cyan-400 rounded-lg bg-indigo-400">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button
            className="mt-4 bg-orange-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" 
            type="submit"
            >New
            </button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default SideBar;