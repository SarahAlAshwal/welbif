import { useState } from 'react';
import { useForm } from '../../Hooks/useForm';
import { postProgram } from '../../Api';
import { useGlobalContext } from '../../GlobalContext';
import { ProgramCreateInput } from '../../types';
import '../AddForm.css';

export default function AddProgram() {
  const { token } = useGlobalContext();
  const [allDayCheckbox, setAllDayCheckbox] = useState<boolean>(false);
  const [repeatedCheckbox, setRepeatedCheckbox] = useState<boolean>(false);
  const initialState: ProgramCreateInput = {
    allDay: false,
    name: '',
    createdAt: '',
    dimension: '',
    end: '',
    isRepeated: false,
    location: '',
    start: '',
    hobbies: [],
    facilitators: [],
  };
  const { onChange, onSubmit, handleArrayInput, values } = useForm(
    addProgramCallback,
    initialState
  );
  async function addProgramCallback() {
    values.allDay = allDayCheckbox;
    values.isRepeated = repeatedCheckbox;
    values.createdAt = new Date();
    console.log(values);
    postProgram(token, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  }

  const handleCheckbox = (
    callback: any,
    target: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    callback(!target);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-container">
        <label>
          Program Name:
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Program Name"
            onChange={onChange}
            required
          />
        </label>
        <label>
          Dimension:
          <input
            name="dimension"
            id="dimension"
            type="text"
            placeholder="Dimension"
            onChange={onChange}
            required
          />
        </label>
        <label>
          Start:
          <input
            name="start"
            id="start"
            type="date"
            placeholder="Start"
            onChange={onChange}
            required
          />
        </label>
        <label>
          End:
          <input
            name="end"
            id="end"
            type="date"
            placeholder="End"
            onChange={onChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            name="location"
            id="location"
            type="text"
            placeholder="Location"
            onChange={onChange}
            required
          />
        </label>
        <label>
          Hobbies:
          <input
            name="hobbies"
            id="hobbies"
            type="text"
            placeholder="Enter hobbies seperated by comma"
            onChange={handleArrayInput}
            required
          />
        </label>
        <label>
          Level of Care:
          <input
            name="levelOfCare"
            id="levelOfCare"
            type="text"
            placeholder="Enter level of care seperated by comma"
            onChange={handleArrayInput}
            required
          />
        </label>
        <label>
          Facilitators:
          <input
            name="facilitators"
            id="facilitators"
            type="text"
            placeholder="Enter facilitators seperated by comma"
            onChange={handleArrayInput}
            required
          />
        </label>
        <label>
          Tags:
          <input
            name="tags"
            id="tags"
            type="text"
            placeholder="Enter tags seperated by comma"
            onChange={handleArrayInput}
            required
          />
        </label>
        <label>
          All Day:
          <input
            className="checkbox"
            name="allDay"
            id="allDay"
            type="checkbox"
            checked={allDayCheckbox}
            onChange={(event) =>
              handleCheckbox(setAllDayCheckbox, allDayCheckbox, event)
            }
          />
          Yes
        </label>
        <label>
          Repeated:
          <input
            className="checkbox"
            name="isRepeated"
            id="isRepeated"
            type="checkbox"
            checked={repeatedCheckbox}
            onChange={(event) =>
              handleCheckbox(setRepeatedCheckbox, repeatedCheckbox, event)
            }
          />
          <span>Yes</span>
        </label>
        <button className="submit-button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
