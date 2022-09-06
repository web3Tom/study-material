import { Outlet, NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <nav className="flex flex-row justify-start gap-10 items-center p-8 mb-3 bg-sky-300 box-border">
        <NavLink
          to="/"
          className="text-3xl text-white font-bold hover:text-sky-800"
        >
          React Interview Prep
        </NavLink>
        <NavLink
          to="/Hooks"
          className="text-2xl text-white font-semibold hover:text-sky-800"
        >
          Hook Practice
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation
