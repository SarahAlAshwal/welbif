export type Attendance = {
  programId: number;
  residentId: number;
  status: string;
};

export type Program = {
  allDay: boolean;
  applicantId: string | null;
  id: string;
  name: string;
  attendance: Array<Attendance>;
  createdAt: string;
  dimension: string;
  end: string;
  facilitators: Array<string>;
  hobbies: Array<string>;
  isRepeated: boolean;
  levelOfCare: Array<string>;
  location: string;
  parentId: string | null;
  recurrence: null | {
    byMonth: number;
    byMonthday: number;
    frequency: string;
    interval: 1;
  };
  start: string;
  tags: Array<string>;
  updatedAt: string;
};

export type Resident = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  moveInDate: string;
  levelOfCare: string | null;
  ambulation: string;
  room: string;
};

export type ProgramWithAttendees = {
  name: string;
  attendees: Array<string> | [];
  start: string;
  end: string;
};
