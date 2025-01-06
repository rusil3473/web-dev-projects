import{Link} from "react-router-dom" 
import {useState} from "react"
export default function Login() {
  const [userInput, setUserInput] = useState({ name: "", email: "", password: "", phNo: "" })
  const handleInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    //Complete this after making backend as this need to be verify & generate a cookie
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
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="passwoed" value={userInput.password} onChange={handleInput} />
          </div>

          <Link type="submit" className="btn btn-primary me-2 mt-3" >Login</Link>
          <Link type="submit" className="btn btn-primary mt-3" to="/login" >New User</Link>
        </form>

      </div>
    </>
  )

}