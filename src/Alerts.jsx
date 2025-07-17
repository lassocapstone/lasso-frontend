import useQuery from "./api/useQuery";
import AlertsExpand from './AlertsExpand';

const Alerts = () => {
  const { data: alertsData } = useQuery('/alerts', 'alerts');
  console.log(alertsData);
  return (
    <>
      <h2>List of Alerts</h2>
      {
        alertsData &&
          alertsData.length ?
          alertsData.map(alert => (
            <ul key={alert.id}>
              <AlertsExpand alert={alert} />
            </ul>
          ))
          :
          <p>You have no alerts.</p>
      }
    </>
  )
}

export default Alerts;