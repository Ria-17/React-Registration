import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'

const FormSignUp = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate)
    return (
        <div className = "form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        User Name 
                    </label>
                    <input id="username" 
                    type="text" 
                    name="username" 
                    className="form-input" 
                    placeholder="Enter your name" 
                    value={values.username} 
                    onChange={handleChange} />
                </div>
                {errors.username && <p style={ {color:'red'}}>{errors.username}</p>}

                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input id="email" 
                    type="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="Enter your email"
                    value={values.email} 
                    onChange={handleChange} />
                </div>
                {errors.email && <p style={ {color:'red'}}>{errors.email}</p>}

                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input id="password" 
                    type="password" 
                    name="password" 
                    className="form-input" 
                    placeholder="Enter your password" 
                    value={values.password} 
                    onChange={handleChange} />
                </div>
                {errors.password && <p style={ {color:'red'}}>{errors.password}</p>}

                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password
                    </label>
                    <input id="password2" 
                    type="password" 
                    name="password2" 
                    className="form-input" 
                    placeholder="Enter your password2" 
                    value={values.password2} 
                    onChange={handleChange}/>
                </div>
                {errors.password2 && <p style={ {color:'red'}}>{errors.password2}</p>}

                <button className="form-input-btn" type="submit"> Sign Up </button><br></br>
                <span className="form-input-login"> Already have an account? Login <a href='#'>here</a></span>
            </form>
        </div>
        


    )
}

export default FormSignUp
