import useMutation from "./api/useMutation";
import { useNavigate } from 'react-router';

const PickAccountType = () => {
  const { mutate: add } = useMutation("PUT", "/users", ["user"]);
  //should be put or patch request?
  const navigate = useNavigate();

  const addAccountType = (formData) => {
    const accountType = formData.get("accountType");
    add({ accountType });
    navigate('/');
    //update navigate route to home page of whichever accounttype
  };

  return (
    <>
      <h1>Pick an Account Type</h1>
      <form action={addAccountType}>
        <label className='radio'> <input type="radio" name="accountType" value="org" /> Organizer </label>
        <label className='radio'> <input type="radio" name="accountType" value="man" /> Manager</label>
        <label className='radio'> <input type="radio" name="accountType" value="sub" /> Subordinate</label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default PickAccountType;