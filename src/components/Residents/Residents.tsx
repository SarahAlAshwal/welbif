import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';
import { Table } from '../Table/Table';
import { useGlobalContext } from '../../GlobalContext';
import { Resident } from '../../types';

export default function Residents() {
  const { residents } = useGlobalContext();
  // const [data, setData] = useState(Array<Resident>);
  // const [isLoading, setIsLoading] = useState(true);

  const cols = useMemo<ColumnDef<Resident>[]>(
    () => [
      {
        header: 'First Name',
        cell: (row) => row.renderValue(),
        accessorKey: 'firstName',
      },
      {
        header: 'Last Name',
        cell: (row) => row.renderValue(),
        accessorKey: 'lastName',
      },
      {
        header: 'Birthday',
        cell: (cell) => new Date(cell.row.original.birthDate).toDateString(),
        accessorKey: 'birthDate',
      },
      {
        header: 'Move in Date',
        cell: (cell) => new Date(cell.row.original.moveInDate).toDateString(),
        accessorKey: 'moveInDate',
      },
      {
        header: 'Level of Care',
        cell: (row) => row.renderValue(),
        accessorKey: 'levelOfCare',
      },
      {
        header: 'Ambulation',
        cell: (row) => row.renderValue(),
        accessorKey: 'ambulation',
      },
      {
        header: 'Room Number',
        cell: (row) => row.renderValue(),
        accessorKey: 'room',
      },
    ],
    []
  );

  return (
    <div>
      <Table data={residents} columns={cols} />
    </div>
  );
}
