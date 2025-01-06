import { Link } from "react-router-dom"
import { useState } from "react"

export default function Signup() {
    const [userInput, setUserInput] = useState({ name: "", email: "", password: "", phNo: "" })
    const handleInput=(e)=>{
        setUserInput({...userInput,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
       //Complete this after making backend as this need to be stored in data base & here is password hence need to generate a hashcode
    }

    return (
        <>
            <div className="container mt-3 ">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" >User Name</label>
                        <input type="text" className="form-control" aria-describedby="User Name" placeholder="Enter User Name" name="name" value={userInput.name} onChange={handleInput} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPhone">Phone Number</label>
                        <input type="tel" className="form-control" id="exampleInputPhone" aria-describedby="Phone Number" placeholder="Enter Phone Number" name="phNo" value={userInput.phNo} onChange={handleInput} />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={userInput.email} onChange={handleInput} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="passwoed" value={userInput.password} onChange={handleInput} />
                    </div>

                    <Link type="submit" className="btn btn-primary me-2 mt-3" >Signup</Link>
                    <Link type="submit" className="btn btn-primary mt-3" to="/login" >Already a user</Link>
                </form>

            </div>
        </>
    )

}