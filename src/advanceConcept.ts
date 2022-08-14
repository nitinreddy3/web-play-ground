type PersonStatus = "active" | "inactive";

interface PersonType
{
  name: string;
  birthDate: Date;
  status: PersonStatus;

}

const person2: PersonType = {
  name: "John",
  birthDate: new Date(),
  status: "active",
};
