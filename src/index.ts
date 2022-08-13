class Person
{
  name: string;
  constructor ( name: string )
  {
    this.name = name;
  }
  sayHello ()
  {
    return `Hello, I'm ${ this.name }`;
  }
}