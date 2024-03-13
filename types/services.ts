export type Department = {
  id: number;
  name: string;
  parentId: number;
};

export type ImportanceDegree = {
  id: number;
  name: string;
};

export type CreatedBy = {
  id: number;
  firstName: string;
  lastName: string;
  fatherName: string;
  policeCard: string;
  rank: string;
  department: Department;
};

export type Letter = {
  id: number;
  uniqueId: number;
  letterNo: number;
  fromDepartment: Department;
  toDepartment: Department;
  importanceDegree: ImportanceDegree;
  envelope: number;
  parcel: null | any;
  createdBy: CreatedBy;
  date: string;
  note: string;
};
