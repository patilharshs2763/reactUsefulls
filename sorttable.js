sort table

import React, { useState } from 'react';

const StudentDetails = () => {
    // Initial data for students
    const [data, setData] = useState([
        { id: 1, firstName: 'Elon', lastName: 'Musk', age: 49, grade: 'A', country: 'USA' },
        { id: 2, firstName: 'Jeff', lastName: 'Bezos', age: 57, grade: 'B', country: 'USA' },
        { id: 3, firstName: 'Steve', lastName: 'Jobs', age: 56, grade: 'A', country: 'USA' },
        { id: 4, firstName: 'Mark', lastName: 'Zuckerberg', age: 39, grade: 'A+', country: 'USA' },
        { id: 5, firstName: 'Bill', lastName: 'Gates', age: 65, grade: 'A', country: 'USA' },
    ]);

    // Sorting configuration: keeps track of the current column and sort direction
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

    // Function to handle sorting when a column header is clicked
    const handleSort = (column) => {
        // Toggle sorting direction if the same column is clicked again
        let direction = 'asc';
        if (sortConfig.key === column && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        // Sort the data based on the column and direction
        const sortedData = [...data].sort((a, b) => {
            if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
            if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        // Update the data and sort configuration
        setData(sortedData);
        setSortConfig({ key: column, direction });
    };

    // Function to render the sort arrow (up or down) next to the column header
    const renderSortArrow = (column) => {
        if (sortConfig.key === column) {
            return sortConfig.direction === 'asc' ? '↑' : '↓';
        }
        return ''; // Return an empty string if no sorting is applied to this column
    };

    return (
        <div>
            {/* Table for displaying student details */}
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        {/* Clickable headers for sorting by ID */}
                        <th onClick={() => handleSort('id')}>
                            ID {renderSortArrow('id')}
                        </th>
                        {/* Clickable headers for sorting by First Name */}
                        <th onClick={() => handleSort('firstName')}>
                            First Name {renderSortArrow('firstName')}
                        </th>
                        {/* Clickable headers for sorting by Last Name */}
                        <th onClick={() => handleSort('lastName')}>
                            Last Name {renderSortArrow('lastName')}
                        </th>
                        {/* Clickable headers for sorting by Age */}
                        <th onClick={() => handleSort('age')}>
                            Age {renderSortArrow('age')}
                        </th>
                        {/* Clickable headers for sorting by Grade */}
                        <th onClick={() => handleSort('grade')}>
                            Grade {renderSortArrow('grade')}
                        </th>
                        {/* Clickable headers for sorting by Country */}
                        <th onClick={() => handleSort('country')}>
                            Country {renderSortArrow('country')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* Display the sorted data */}
                    {data.map((student) => (
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
