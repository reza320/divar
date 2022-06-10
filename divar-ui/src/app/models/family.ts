export class Family {
  id: bigint;
  name: string;
  lastName: string;
  nationalCode: string;
  birthDate: string;
  dead: number;
  selfIntroduced: number;
  married: number;
  gender: number;
  relation: number;
  documents: [
    {
      fileName: string,
      type: string,
      size: number,
      image: Blob
    }
  ];
  relationChecked: number;
}
