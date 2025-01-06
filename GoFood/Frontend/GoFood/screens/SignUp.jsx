import { Link, BrowserRouter as Route } from 'react-router-dom';
import { useState } from 'react';
export default function SignUp() {
  const [data, setdata] = useState({ name: '', email: '', password: '', location: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/createuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name:data.name, email:data.email, password:data.password, location: data.location })
      });
  
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        alert('User created successfully');
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
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" value={data.name} onChange={onChange} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data.email} onChange={onChange} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={data.password} onChange={onChange} />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="location">Loaction</label>
            <input type="text" className="form-control" name='location' value={data.location} onChange={onChange} />
          </div>

          <button type="submit" className="btn btn-primary m-3">SignUp</button>
          <Link to="/login" className="btn btn-primary m-3">Already a user</Link>
        </form>
      </div>
    </>
  )
}