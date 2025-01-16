Search by firstName only
import React, { useState } from 'react';

const StudentDetails = () => {
    const [data, setData] = useState([
        { id: 1, firstName: 'Elon', lastName: 'Musk', age: 49, grade: 'A', country: 'USA' },
        { id: 2, firstName: 'Jeff', lastName: 'Bezos', age: 57, grade: 'B', country: 'USA' },
        { id: 3, firstName: 'Steve', lastName: 'Jobs', age: 56, grade: 'A', country: 'USA' },
        { id: 4, firstName: 'Mark', lastName: 'Zuckerberg', age: 39, grade: 'A+', country: 'USA' },
        { id: 5, firstName: 'Bill', lastName: 'Gates', age: 65, grade: 'A', country: 'USA' },
    ]);

    const [searchItem, setSearchItem] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    // Search logic triggered by button click (only for firstName)
    const handleSearch = () => {
        if (searchItem.trim() === '') {
            setFilteredData(data); // Show all data if search is empty
        } else {
            const results = data.filter((row) =>
                row.firstName.toLowerCase().includes(searchItem.toLowerCase()) // Search only by firstName
            );
            setFilteredData(results);
        }
    };

    // Reset search input and show all data
    const handleReset = () => {
        setSearchItem('');
        setFilteredData(data); // Show all data
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)} // Update search term on input change
                    placeholder="Search by First Name"
                />
                <button onClick={handleSearch}>Search</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Grade</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.age}</td>
                            <td>{student.grade}</td>
                            <td>{student.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentDetails;
