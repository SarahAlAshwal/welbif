import { useEffect, useState, useMemo } from 'react';
import { useGlobalContext } from '../../GlobalContext';
import { ProgramWithAttendees } from '../../types';
import { showPrograms } from '../../util';
import { Table } from '../Table/Table';
import { ColumnDef } from '@tanstack/react-table';

export default function Programs() {
  const { residents, programs } = useGlobalContext();
  const [programsWithAttendees, setProgramsWithAttendess] = useState(
    Array<ProgramWithAttendees>
  );

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
          cell.row.original.attendees.map((attendee, index) => (
            <h5 key={index}>{attendee}</h5>
          )),
        accessorKey: 'attendees',
      },
    ],
    []
  );
  return <Table data={programsWithAttendees} columns={cols} />;
}
