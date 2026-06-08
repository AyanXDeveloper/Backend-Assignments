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

app.get("/", (req, res) => {
  res.send("<h1>This is the home Page</h1>")
})
app.get("/users", (req, res) => {
  res.send(users)
})
app.get("/clothes", (req, res) => {
  res.send("<h1>This is the Clothing Page</h1>")
})
app.get("/shoes", (req, res) => {
  res.send("<h1>This is the Shoes Page</h1>")
})
app.get("/medicines", (req, res) => {
  res.send("<h1>This is the Medicines Page</h1>")
})
app.get("/products", (req, res) => {
  res.send("<h1>This is the Products Page</h1>")
})

app.listen(3000)