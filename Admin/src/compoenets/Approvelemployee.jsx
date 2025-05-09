import React from 'react';

const Approvel = () => {
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      dateOfUpdate: '2024-03-13',
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      dateOfUpdate: '2024-03-12',
      status: 'Approved'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      dateOfUpdate: '2024-03-11',
      status: 'Declined'
    },
  ];

  const handleStatusChange = (id, newStatus) => {
    console.log(`Employee ID: ${id}, Status: ${newStatus}`);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">👨‍💼 Employee Status Table</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4">Employee Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Date of Update</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="text-center border-t border-gray-300">
              <td className="p-4">{employee.name}</td>
              <td className="p-4">{employee.email}</td>
              <td className="p-4">{employee.dateOfUpdate}</td>
              <td className="p-4">
                <button
                  onClick={() => handleStatusChange(employee.id, 'Approved')}
                  className="text-green-500 mr-4"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleStatusChange(employee.id, 'Declined')}
                  className="text-red-500"
                >
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Approvel;
