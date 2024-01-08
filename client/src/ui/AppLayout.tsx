import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AppLayout;
