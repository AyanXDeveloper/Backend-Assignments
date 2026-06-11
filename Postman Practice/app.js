const express = require("express")

const app = express()

app.use(express.json())

let users = []

app.get("/", (req, res) => {
    res.status(200).json({message: "Visit the /read-users Page to View the List of Users"})
})

app.post("/create-user", (req, res) => {
    let singleUser = req.body
    console.log("User Created:",singleUser);
    users.push(singleUser)
    console.log("All Users:",users);
    res.status(201).json({ Notification: "User Created Successfully", AllUsers: users})
})

app.get("/read-users", (req, res) => {
    res.status(200).json({ status: users.length > 0 ? "success" : "error", AllUsers: users, TotalUsers: users.length, Notification: users.length > 0 ? "Users Retrieved Successfully" : "No users found" })
})

app.patch("/update-user/:id", (req, res) => {
    let userId = req.params.id
    let updatedData = req.body
    let userIndex = users.findIndex(user => user.id === userId)

    if (userIndex != -1) {
        users[userIndex] = { ...users[userIndex], ...updatedData }
        res.status(200).json({ Notification: "User Updated Successfully", UpdatedUser: users[userIndex] })
    } else {
        res.status(404).json({ Notification: "User Not Found" })
    }
})

app.delete("/delete-user/:id", (req, res) => {
    let userId = req.params.id
    let userIndex = users.findIndex(user => user.id === userId)

    if (userIndex != -1) {
        users.splice(userIndex, 1)
        res.status(200).json({ Notification: "User Deleted Successfully" })
    } else {
        res.status(404).json({ Notification: "User Not Found" })
    }
})

app.listen("5500", () => {
    console.log("Server is Running.....");
})