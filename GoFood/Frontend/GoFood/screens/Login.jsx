import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

export default function Login() {
  
  const [data, setdata] = useState({ email: '', password: '' });
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

     try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:data.email, password:data.password})
      });
      
      const result = await response.json();
    
      if (response.ok) {
        alert('Login Successfull');
        navigate('/');
        localStorage.setItem("token",result.token)
      } else {
        alert(result.message || 'Enter Valid credentials');
      }
    }
    catch (err) {
      alert("Enter Valid data");
    } 
  }
  const onChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
         
          <div className="form-group mt-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data.email} onChange={onChange} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={data.password} onChange={onChange} />
          </div>

          

          <button type="submit" className="btn btn-primary m-3">Login</button>
          <Link to="/createuser" className="btn btn-primary m-3">New User</Link>
        </form>
      </div>
    </>
  )
 
  
}