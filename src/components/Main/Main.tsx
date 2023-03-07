import './Main.css';
import { useGlobalContext } from '../../GlobalContext';
import Residents from '../Residents/Residents';
import Programs from '../Programs/Programs';
import AddResident from '../AddResident/AddResident';
import AddProgram from '../AddProgram/AddProgram';
import AssignAttendance from '../AssignAttendance/AssignAttendance';
import {
  ADD_PROGRAM,
  ADD_RESIDENT,
  ASSIGN_ATTENDEE,
  PROGRAM,
  RESIDENTS,
} from '../../constants';

export default function Main() {
  const { choice } = useGlobalContext();
  return (
    <>
      {!choice && (
        <div className="welcome">
          <h1>Welcome to welbi</h1>
        </div>
      )}
      {choice === RESIDENTS && <Residents />}
      {choice === PROGRAM && <Programs />}
      {choice === ADD_RESIDENT && <AddResident />}
      {choice === ADD_PROGRAM && <AddProgram />}
      {choice === ASSIGN_ATTENDEE && <AssignAttendance />}
    </>
  );
}
