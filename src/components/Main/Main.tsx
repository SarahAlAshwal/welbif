import './Main.css';
import { useGlobalContext } from '../../GlobalContext';

export default function Main() {
  const { choice } = useGlobalContext();
  return (
    <>
      {!choice && (
        <div className="welcome">
          <h1>Welcome to welbi</h1>
        </div>
      )}
      {choice === 'residents' && <div>show residents</div>}
      {choice === 'programs' && <div>show programs</div>}
      {choice === 'add resident' && <div>show add residents</div>}
      {choice === 'assign to programs' && <div>show assign to programs</div>}
    </>
  );
}
