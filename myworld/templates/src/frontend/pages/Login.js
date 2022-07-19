import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();
    function handleLogin(){
        navigate("/pages/Profile");
    }
  return (
    <div>
    <div className="container">
        <div className="d-flex justify-content-center ">
            <div className="card">
              <div className="text-container">
                <div className="card-header">
                    <h3>Sign In</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="username"/>
                            
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder="password"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn float-right login_btn" onClick={handleLogin}/>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <div className  ="d-flex justify-content-center links">
                        Don't have an account?<a href="./Signup">Sign Up</a>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>

    </div>
  )
}
