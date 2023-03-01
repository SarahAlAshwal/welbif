import './Header.css';
import { useGlobalContext } from '../../GlobalContext';

export default function Header() {
  const { choice, setChoice } = useGlobalContext();
  console.log('xxxxx', choice);
  return (
    <div className="header">
      <h2 className="company-name">welbi</h2>
      <button className="header-button" onClick={() => setChoice('residents')}>
        Residents
      </button>
      <button className="header-button" onClick={() => setChoice('programs')}>
        Programs
      </button>
      <button
        className="header-button"
        onClick={() => setChoice('add resident')}
      >
        Add Resident
      </button>
      <button
        className="header-button"
        onClick={() => setChoice('assign to programs')}
      >
        Assign To Programs
      </button>
    </div>
  );
}
