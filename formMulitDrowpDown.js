import React, { useState } from 'react';

const FormExample = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        country: '',
        acceptTerms: false,
        occupation: '', // New field for occupation dropdown
        hobbies: '', // New field for hobbies dropdown
        education: '', // New field for education dropdown
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Save data to a JSON file (for demonstration purposes, logging to console)
        const jsonData = JSON.stringify(formData, null, 2);
        console.log('Form Data in JSON format:', jsonData);
        alert('Form data saved successfully!');
    };

    return (
        <div>
            <h2>Form Example</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter your age"
                    />
                </div>

                <div>
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label>Country:</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Enter your country"
                    />
                </div>

                {/* Dropdown for Occupation */}
                <div>
                    <label>Occupation:</label>
                    <select
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                    >
                        <option value="">Select Occupation</option>
                        <option value="student">Student</option>
                        <option value="developer">Developer</option>
                        <option value="teacher">Teacher</option>
                        <option value="designer">Designer</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Dropdown for Hobbies */}
                <div>
                    <label>Hobbies:</label>
                    <select
                        name="hobbies"
                        value={formData.hobbies}
                        onChange={handleChange}
                    >
                        <option value="">Select Hobby</option>
                        <option value="reading">Reading</option>
                        <option value="gaming">Gaming</option>
                        <option value="sports">Sports</option>
                        <option value="traveling">Traveling</option>
                        <option value="cooking">Cooking</option>
                    </select>
                </div>

                {/* Dropdown for Education Level */}
                <div>
                    <label>Education Level:</label>
                    <select
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                    >
                        <option value="">Select Education Level</option>
                        <option value="highschool">High School</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="doctorate">Doctorate</option>
                    </select>
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                        />
                        I accept the terms and conditions
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormExample;
