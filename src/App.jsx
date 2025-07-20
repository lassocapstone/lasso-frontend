import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Tasks from "./Tasks/Tasks";
import Alerts from "./alerts/Alerts";
import AccountHomePage from "./homepage/AccountHomePage";
import ProfileInfo from "./Profile/ProfileInfo";
import PickAccountType from "./profile/PickAccountType";
import Error404 from "./Error404";
import { Roster } from "./rosters/Roster";
import { RosterUserDetails } from "./rosters/RosterUserDetails";
import EventDetails from "./eventDetails/EventDetails";
import { EventSettings } from "./EventDetails/EventSettings";
import EventCreate from "./eventDetails/EventCreate";
import TaskCreation from "./tasks/TaskCreation";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pickaccount" element={<PickAccountType />} />
        <Route path="/account" element={<AccountHomePage />} />
        <Route path="/profile" element={<ProfileInfo />} />
        <Route path="/events/createEvent" element={<EventCreate />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/events/:eventId/tasks" element={<Tasks />} />
        <Route path="/events/:eventId/tasks/createTask" element ={<TaskCreation />} />
        <Route path="/events/:eventId/alerts" element={<Alerts />} />
        <Route path="/events/:eventId/roster" element={<Roster />} />
        <Route path="/events/:eventId/roster/:userId" element={<RosterUserDetails />} />
        <Route path="/events/:eventId/settings" element={<EventSettings />} />
        <Route path="/*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
