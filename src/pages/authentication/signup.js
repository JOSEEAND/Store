import React, { useState } from "react"

const SignupPage = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("/.netlify/functions/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, password, phone }),
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default SignupPage
