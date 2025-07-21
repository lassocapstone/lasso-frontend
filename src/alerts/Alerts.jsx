import useQuery from "../api/useQuery";
import AlertsExpand from './AlertsExpand';

const Alerts = () => {
  const { data: alertsData } = useQuery('/alerts', 'alerts');

  return (
    <>
      <h1>List of Alerts</h1>
      {
        alertsData &&
        alertsData.map(alert => (
          <ul className="taskborders" key={alert.id} tabIndex="0">
            <AlertsExpand alert={alert} />
          </ul>
        ))
      }
    </>
  )
}

export default Alerts;