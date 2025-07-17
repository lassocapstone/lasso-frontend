import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Tasks from "./Tasks";
import Alerts from "./Alerts";
import AccountHomePage from "./AccountHomePage";
import ProfileInfo from "./ProfileInfo";
import PickAccountType from "./PickAccountType";
import Error404 from "./Error404";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/accounthomepage" element={<AccountHomePage />} />
        <Route path="/profile" element={<ProfileInfo />} />
        <Route path="/pickaccount" element={<PickAccountType />} />
        <Route path="/*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
