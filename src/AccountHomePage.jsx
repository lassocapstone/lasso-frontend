import Tasks from "./Tasks";
import TaskCreation from "./TaskCreation";
import Alerts from "./Alerts";
import AlertCreation from "./AlertCreation";
import { Link } from "react-router";
import { useAuth } from "./auth/AuthContext";

const AccountHomePage = () => {
  const { accountType } = useAuth();

  return (
    <>
      {
        accountType &&
          accountType === "org" ?
          <>
            <h1>Welcome Organizer!</h1>
            <h1>Current Event: </h1>
            <AlertCreation />
            <Alerts />
            <TaskCreation />
            <Tasks />
            <Link to="/"><button>Event Settings</button></Link>
            {/* Insert event settings route */}
          </>
          :
          accountType === "man" ?
            <>
              <h1>Welcome Manager!</h1>
              <h2>Current Event: </h2>
              <h2>Your Roster</h2>
              <AlertCreation />
              <Alerts />
              <TaskCreation />
              <Tasks />
            </>
            :
            accountType === "sub" ?
              <>
                <h1>Welcome Subordinate!</h1>
                <h1>Current Event: </h1>
                <Tasks />
              </>
              :
              <>
                <h1>You need an account type.</h1>
                <Link to="/pickaccount">Choose an account type.</Link>
              </>
      }
    </>
  )
}

export default AccountHomePage;
