interface Contact
{
  name: string;
  age?: number;
  status: ContactStatus;
};

interface Address
{
  street: string;
  city: string;
}
enum ContactStatus
{
  ACTIVE = "active",
  INACTIVE = "inactive",
}

type AddressableContact = Contact & Address;

let person1: AddressableContact = {
  name: "John",
  age: 43,
  status: ContactStatus.ACTIVE,
  street: "123 Main St",
  city: "Pune",
};

console.log( person1.name );