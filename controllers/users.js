import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};
export const createUser = (req, res) => {
  const user = req.body;
  // const userId = uuidv4();
  // const userWithID = { ...user, id: uuidv4()};
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.name} added to the database! `);
};

export const getUser = (req, res) => {
  // console.log("req",req.params)
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  // console.log("req",req.params)
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  res.send(`User with ID ${id} deleted from the database`);
};
