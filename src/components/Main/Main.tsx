import './Main.css';
import { useGlobalContext } from '../../GlobalContext';
import Residents from '../Residents/Residents';
import Programs from '../Programs/Programs';
import AddResident from '../AddResident/AddResident';
import AddProgram from '../AddProgram/AddProgram';
import AssignAttendance from '../AssignAttendance/AssignAttendance';

export default function Main() {
  const { choice } = useGlobalContext();
  return (
    <>
      {!choice && (
        <div className="welcome">
          <h1>Welcome to welbi</h1>
        </div>
      )}
      {choice === 'residents' && <Residents />}
      {choice === 'programs' && <Programs />}
      {choice === 'add resident' && <AddResident />}
      {choice === 'add program' && <AddProgram />}
      {choice === 'assign to programs' && <AssignAttendance />}
    </>
  );
}
