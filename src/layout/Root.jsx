import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-fira-sans">
      <Outlet />
    </div>
  );
};

export default Root;
