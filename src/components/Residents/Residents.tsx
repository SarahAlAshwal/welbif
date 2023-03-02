import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';
import MockData from '../Table/MockData.json';
import { Table } from '../Table/Table';

type Resident = {
  userId: string;
  name: string;
  gender: string;
  birthday: string;
  moveInDate: string;
  levelOfCare: string | null;
  hobbies: string | null;
  roomNumber: string;
};

export default function Residents() {
  const MyData: Array<Resident> = MockData.map((resident) => {
    return {
      userId: resident.userId,
      name: resident.name,
      gender: resident.gender,
      birthday: new Date(Date.parse(resident.birthday)).toDateString(),
      moveInDate: new Date(Date.parse(resident.moveInDate)).toDateString(),
      levelOfCare: resident.levelOfCare === null ? '-' : resident.levelOfCare,
      hobbies: resident.hobbies === null ? '-' : resident.hobbies,
      roomNumber: resident.roomNumber,
    };
  });

  const cols = useMemo<ColumnDef<Resident>[]>(
    () => [
      {
        header: 'Name',
        cell: (row) => row.renderValue(),
        accessorKey: 'name',
      },
      {
        header: 'Gender',
        cell: (row) => row.renderValue(),
        accessorKey: 'gender',
      },
      {
        header: 'Birthday',
        cell: (row) => row.renderValue(),
        accessorKey: 'birthday',
      },
      {
        header: 'Move in Date',
        cell: (row) => row.renderValue(),
        accessorKey: 'moveInDate',
      },
      {
        header: 'Level of Care',
        cell: (row) => row.renderValue(),
        accessorKey: 'levelOfCare',
      },
      {
        header: 'Hobbies',
        cell: (row) => row.renderValue(),
        accessorKey: 'hobbies',
      },
      {
        header: 'Room Number',
        cell: (row) => row.renderValue(),
        accessorKey: 'roomNumber',
      },
    ],
    []
  );

  return (
    <div>
      <Table data={MyData} columns={cols} />
    </div>
  );
}
