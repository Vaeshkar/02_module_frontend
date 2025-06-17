import { useEffect, useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  const [prefersDark, setPrefersDark] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = evt => setPrefersDark(evt.matches);
    mq.addEventListener('change', handleChange);

    return () => mq.removeEventListener('change', handleChange);
  }, []);

  return (
    <>
      <nav className='navbar bg-base-100 shadow-sm'>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            WBS Spinner Galore
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal gap-4 px-4'>
            <li>
              <NavLink className={({ isActive }) => `btn btn-ghost ${isActive ? 'btn-active text-primary font-bold' : ''}`} to='/pokemonList'>Pokemon List</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `btn btn-ghost ${isActive ? 'btn-active text-primary font-bold' : ''}`} to='/pokemon'>Pokemon</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `btn btn-ghost ${isActive ? 'btn-active text-primary font-bold' : ''}`} to='/post'>Post</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `btn btn-ghost ${isActive ? 'btn-active text-primary font-bold' : ''}`} to='/posts'>Posts</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <ToastContainer theme={prefersDark ? 'dark' : 'light'} />
      <main>
        <div className='container mx-auto p-4 max-w-3xl'>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
