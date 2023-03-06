import { useForm } from '../../Hooks/useForm';
import { postResident } from '../../Api';
import { useGlobalContext } from '../../GlobalContext';
import { ResidentCreateInput } from '../../types';
import '../AddForm.css';

export default function AddResident() {
  const { token } = useGlobalContext();
  const initialState: ResidentCreateInput = {
    firstName: '',
    lastName: '',
    birthDate: '',
    moveInDate: '',
    levelOfCare: '',
    ambulation: '',
    room: '',
  };
  const { onChange, onSubmit, values } = useForm(
    addResidentCallback,
    initialState
  );
  async function addResidentCallback() {
    values.name = `${values.firstName} ${values.lastName}`;
    console.log(values, token);
    postResident(token, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="input-container">
        <label>
          First Name:
          <input
            name="firstName"
            id="firstName"
            type="text"
            placeholder="First Name"
            onChange={onChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Last Name"
            onChange={onChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            name="birthDate"
            id="birthDate"
            type="date"
            placeholder="Birth Date"
            onChange={onChange}
            required
          />
        </label>
        <label>
          Move In Date:
          <input
            name="moveInDate"
            id="moveInDate"
            type="date"
            placeholder="Move In Date"
            onChange={onChange}
            required
          />
        </label>
        <label>
          Level of Care:
          <input
            name="levelOfCare"
            id="levelOfCare"
            type="text"
            placeholder="Level Of Care"
            onChange={onChange}
            required
          />
        </label>
        <label>
          Ambulation:
          <input
            name="ambulation"
            id="ambulation"
            type="text"
            placeholder="Ambulation"
            onChange={onChange}
            required
          />
        </label>
        <label>
          Room Number:
          <input
            name="room"
            id="room"
            type="room"
            placeholder="Room Number"
            onChange={onChange}
            required
          />
        </label>
        <button className="submit-button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
