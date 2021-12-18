import bcrypt from "bcryptjs";
const users = [
  {
    name: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "raghava",
    email: "raghava@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  { 
    name: "krishna",
    email: "krishna@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
