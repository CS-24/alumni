//name,age,phoneno email.
import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const navigate = useNavigate();
    function handleLogin(){
        navigate("/pages/Login");
    }
  return (
    <div>
    <div className="signup-container">
        <div className="d-flex justify-content-center ">
            <div className="signup-card">
              <div className="text-container">
                <div className="signup-card-header">
                    <h3>Sign Up</h3>
                </div>
                <div className="signup-card-body">
                    <form>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <label for="form-nm-control" className="name-holder">Enter your name</label>
                            <input type="text" className="form-nm-control"/>
                            
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <label for="form-em-control" className="email-holder">Enter your email</label>
                            <input type="password" className="form-em-control"/>
                        </div>
                        
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <label for="form-control" className="age-holder">Enter your Age</label>
                            <input type="password" className="form-pw-control"/>
                        </div>
                        
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <label for="form-ph-control" className="age-holder">Enter your Phone Number</label>
                            <input type="password" className="form-ph-control"/>
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <label for="form-g-control" className="g-holder">Enter your Year Of Graduation</label>
                            <input type="password" className="form-g-control"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Signup" className="btn float-right login_btn" onClick={handleLogin}/>
                        </div>
                    </form>
                </div>
                <div className="signup-card-footer">
                    <div className  ="d-flex justify-content-center links">
                        Have an account ?<a href="./Login">Log In</a>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>

    </div>
  )
}
