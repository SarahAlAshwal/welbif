import { useState } from 'react';
import { useGlobalContext } from '../../GlobalContext';
import './AssignAttendance.css';
import { assignAttendee } from '../../Api';

export default function AssignAttendance() {
  const { token, residents, programs } = useGlobalContext();
  const [program, setProgram] = useState('');
  const [attendee, setAttendee] = useState('');
  const [status, setStatus] = useState('');

  const residentsOptions = residents.map((resident, index) => (
    <option key={index} value={resident.id}>
      {resident.lastName}
    </option>
  ));
  const programsOptions = programs.map((program, index) => (
    <option key={index} value={program.id}>
      {program.name}
    </option>
  ));
  const statusOptions = ['Passive', 'Declined', 'Active'].map(
    (status, index) => (
      <option key={index} value={status}>
        {status}
      </option>
    )
  );

  const handleSubmit = () => {
    assignAttendee(token, Number(program), Number(attendee), status)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSelect = (
    event: React.ChangeEvent<HTMLSelectElement>,
    callback: any
  ) => {
    callback(event.target.value);
  };

  return (
    <>
      <div className="select-container">
        <label>
          Select Program:
          <select
            className="attendance-select"
            name="program"
            defaultValue=""
            onChange={(event) => handleSelect(event, setProgram)}
          >
            <option value="" disabled selected>
              Select Program
            </option>
            {programsOptions}
          </select>
        </label>
        <label>
          Select Attendee:
          <select
            className="attendance-select"
            name="attendee"
            defaultValue=""
            onChange={(event) => handleSelect(event, setAttendee)}
          >
            <option value="" disabled selected>
              Select Attendee
            </option>
            {residentsOptions}
          </select>
        </label>
        <label>
          Status:
          <select
            className="attendance-select"
            name="status"
            defaultValue=""
            onChange={(event) => handleSelect(event, setStatus)}
          >
            <option value="" disabled selected>
              Select Status
            </option>
            {statusOptions}
          </select>
        </label>
      </div>
      <button className="submit-button" onClick={() => handleSubmit()}>
        Submit
      </button>
    </>
  );
}
