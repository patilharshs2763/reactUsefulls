table to search and sort facility

import React, { useState, useEffect } from 'react';

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
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

    // Real-time search logic
    useEffect(() => {
        if (searchItem.trim() === '') {
            setFilteredData(data); // Show all data if search is empty
        } else {
            const results = data.filter((row) =>
                Object.values(row)
                    .join(' ') // Join all values into a single string
                    .toLowerCase()
                    .includes(searchItem.toLowerCase()) // Search for the term in the entire row
            );
            setFilteredData(results);
        }
    }, [searchItem, data]); // Re-run search whenever searchItem or data changes

    const handleSort = (column) => {
        let direction = 'asc';
        if (sortConfig.key === column && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        const sortedData = [...filteredData].sort((a, b) => {
            if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
            if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        setFilteredData(sortedData);
        setSortConfig({ key: column, direction });
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)} // Trigger search on input change
                    placeholder="Search in all columns"
                />
            </div>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th onClick={() => handleSort('id')}>ID</th>
                        <th onClick={() => handleSort('firstName')}>First Name</th>
                        <th onClick={() => handleSort('lastName')}>Last Name</th>
                        <th onClick={() => handleSort('age')}>Age</th>
                        <th onClick={() => handleSort('grade')}>Grade</th>
                        <th onClick={() => handleSort('country')}>Country</th>
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
