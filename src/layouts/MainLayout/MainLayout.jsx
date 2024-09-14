import { Outlet } from "react-router-dom";
import "./mainlayout.css";
import Header from "../../components/Header/Header";
export default function MainLayout() {
  return (
    <div className="app__mainlayout">
      <Header />
      <main className="app__main">
        <Outlet />
      </main>
    </div>
  );
}
