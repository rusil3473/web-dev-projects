import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Navbar() {
  const handleClick = () => {
    localStorage.removeItem('token');
  };

  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo link */}
          <Link className="navbar-brand fs-1 fs-italic" to="/">GoFood</Link>

          {/* Navbar Toggler for mobile view */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"  // Correcting this to match the id of the collapse div
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar items and links */}
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav ab">
              {/* Always visible links */}
              <li className="nav-item d-flex flex-row">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link active" aria-current="page" to="/">My Orders</Link>
              </li>
            </ul>

            {/* Conditional rendering based on token */}
            {localStorage.getItem("token") ? (
              <ul className="navbar-nav  " style={{width:"500px !important" }}>
                {/* Logged-in user links */}
                <li className="nav-item d-flex flex-row gap-3">
                  <Link className="nav-link" aria-current="page" to="/myCart">My Cart</Link>
                  <Link className="btn bg-danger ms-2" to="/login" onClick={handleClick}>Logout</Link>
                </li>
              </ul>
            ) : (
              <div className=" d-flex flex-row gap-3" >
                {/* Links for logged-out user */}
                <Link className="btn bg-success" to="/login">Login</Link>
                <Link className="btn bg-success" to="/createuser">SignUp</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
   
  );
}
