const express = require("express")
const app = express()

const users = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  age: Math.floor(Math.random() * 43) + 18, // 18-60
  city: [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Peshawar",
    "Quetta"
  ][Math.floor(Math.random() * 5)],
  isActive: Math.random() > 0.5,
}));

app.get("/", (req, res)=> {
    res.send("<h1>This is the home Page</h1>")
})
app.get("/users", (req, res)=> {
    res.send(users)
})

app.listen(3000)