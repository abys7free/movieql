export const people = [
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: 2,
    name: "abys",
    age: 31,
    gender: "male"
  },
  {
    id: 3,
    name: "genie",
    age: 29,
    gender: "female"
  }
];

export const getByid = id => {
  return people.filter(person => person.id === id)[0]
}