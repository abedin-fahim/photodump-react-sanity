import { Outlet } from 'react-router-dom';
const root = () => {
  return (
    <>
      <header>
        <h3>Welcome to somewhere</h3>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default root;
