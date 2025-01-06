import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { loginContext } from "./ContextReducer";
export default function Login() {

  const {state,dispatch}=useContext(loginContext);

  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({ email: "", password: "" })
  const handleInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(userInput.password)
      const a = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: userInput.email, password: userInput.password })
        ,credentials:"include"
      });
      const result = await a.json()
     
      if (result.message === "Login successful") {
        dispatch({type:"Login"})
        navigate("/dashboard")
      }
    }
    catch (err) { console.log(err) }

  }
  return (

    <>
      <div className="container mt-3 ">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={userInput.email} onChange={handleInput} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={userInput.password} onChange={handleInput} />
          </div>

          <button type="submit" className="btn btn-primary me-2 mt-3" >Login</button>
          <Link type="submit" className="btn btn-primary mt-3" to="/signup" >New User</Link>
        </form>

      </div>
    </>
  )

}