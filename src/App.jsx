import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Tasks from "./Tasks";
import Alerts from "./Alerts";
import ProfileInfo from "./Profile";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<p>Home page</p>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/profile" element={<ProfileInfo />} />
      </Route>
    </Routes>
  );
}
