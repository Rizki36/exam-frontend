import { FC } from 'react';

import Container from '@/components/Container';

const Navbar: FC<{ className?: string }> = ({ className }) => {
  return (
    <Container
      className={`bg-opacity-20 backdrop-blur bg-base-100 w-full ${className}`}
    >
      <div className="navbar">
        <div className="flex-1">
          <a className="text-4xl normal-case btn btn-ghost">Booku</a>
        </div>
        <div className="flex-none">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </div>
          </label>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 w-52 shadow menu menu-compact dropdown-content bg-base-100 rounded-box"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
