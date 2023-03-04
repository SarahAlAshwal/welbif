import { Program, Resident, Attendance } from './types';

const searchResidentName = (
  attendance: Attendance,
  residents: Array<Resident>
) => {
  const residentObj = residents.find(
    (resident) => attendance.residentId === resident.id
  );
  return residentObj
    ? `${residentObj.firstName} ${residentObj.lastName}`
    : null;
};

export const showPrograms = (
  programs: Array<Program>,
  residents: Array<Resident>
) => {
  const programsWithAttendees = programs.map((program: Program) => {
    const attendeesNames: Array<string> = [];
    program.attendance.forEach((attendees) => {
      let residentName = searchResidentName(attendees, residents);
      if (residentName) attendeesNames.push(residentName);
    });
    return {
      name: program.name,
      start: program.start,
      end: program.end,
      attendees: attendeesNames,
    };
  });
  return programsWithAttendees;
};
