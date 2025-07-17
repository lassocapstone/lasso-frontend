import { Link } from "react-router"
export const RosterMemberDisplay = ({member}) => {

  return (
    <Link to={`./${member.id}`}>
      <div className="member-card">    
        <p>{member.name}</p>
      </div>
    </Link>
  )
}