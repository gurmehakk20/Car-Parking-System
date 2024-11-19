import React, { useState } from 'react';
import '../Styles/SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        role: 'user'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="signup-container">
            <h1 className="signup-title">Sign Up</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="signup-form-group">
                    <label htmlFor="signup-username" className="signup-label">Username</label>
                    <input
                        type="text"
                        id="signup-username"
                        name="username"
                        className="signup-input"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="signup-email" className="signup-label">Email</label>
                    <input
                        type="email"
                        id="signup-email"
                        name="email"
                        className="signup-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="signup-phone" className="signup-label">Phone No</label>
                    <input
                        type="tel"
                        id="signup-phone"
                        name="phone"
                        className="signup-input"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="signup-password" className="signup-label">Password</label>
                    <input
                        type="password"
                        id="signup-password"
                        name="password"
                        className="signup-input"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="signup-role" className="signup-label">Role</label>
                    <select
                        id="signup-role"
                        name="role"
                        className="signup-select"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
