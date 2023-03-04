import { useEffect, useState, useMemo } from 'react';
import { useGlobalContext } from '../../GlobalContext';
import { getPrograms } from '../../Api';
import { Program, ProgramWithAttendees } from '../../types';
import { showPrograms } from '../../util';
import { Table } from '../Table/Table';
import { ColumnDef } from '@tanstack/react-table';

export default function Programs() {
  const { token, residents } = useGlobalContext();
  const [programs, setPrograms] = useState(Array<Program>);
  const [programsWithAttendees, setProgramsWithAttendess] = useState(
    Array<ProgramWithAttendees>
  );

  useEffect(() => {
    getPrograms(token)
      .then((res) => {
        setPrograms(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setProgramsWithAttendess(showPrograms(programs, residents));
  }, [programs, residents]);

  const cols = useMemo<ColumnDef<ProgramWithAttendees>[]>(
    () => [
      {
        header: 'Program',
        cell: (row) => row.renderValue(),
        accessorKey: 'name',
      },
      {
        header: 'Start',
        cell: (cell) => new Date(cell.row.original.start).toDateString(),
        accessorKey: 'start',
      },
      {
        header: 'End',
        cell: (cell) => new Date(cell.row.original.start).toDateString(),
        accessorKey: 'end',
      },
      {
        header: 'Attendees',
        cell: (cell) =>
          cell.row.original.attendees.map((attendee) => <h5>{attendee}</h5>),
        accessorKey: 'attendees',
      },
    ],
    []
  );
  return <Table data={programsWithAttendees} columns={cols} />;
}
