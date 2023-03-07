import './Header.css';
import { useGlobalContext } from '../../GlobalContext';
import {
  ADD_PROGRAM,
  ADD_RESIDENT,
  ASSIGN_ATTENDEE,
  PROGRAM,
  RESIDENTS,
} from '../../constants';

export default function Header() {
  const { setChoice } = useGlobalContext();

  return (
    <div className="header">
      <h2 className="company-name">welbi</h2>
      <button className="header-button" onClick={() => setChoice(RESIDENTS)}>
        Residents
      </button>
      <button className="header-button" onClick={() => setChoice(PROGRAM)}>
        Programs
      </button>
      <button className="header-button" onClick={() => setChoice(ADD_RESIDENT)}>
        Add Resident
      </button>
      <button className="header-button" onClick={() => setChoice(ADD_PROGRAM)}>
        Add Program
      </button>
      <button
        className="header-button"
        onClick={() => setChoice(ASSIGN_ATTENDEE)}
      >
        Assign Attendance
      </button>
    </div>
  );
}
