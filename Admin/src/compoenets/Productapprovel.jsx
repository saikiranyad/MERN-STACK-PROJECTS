import React from 'react';

const ProductApproval = () => {
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      date: '2025-03-13'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      date: '2025-03-12'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      date: '2025-03-11'
    },
  ];

  const handleApprove = (id) => {
    console.log('Approved employee with id:', id);
  };

  const handleDecline = (id) => {
    console.log('Declined employee with id:', id);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">🛠️ Employee Approval Table</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4">S.No</th>
            <th className="p-4">Employee Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Date of Update</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id} className="text-center border-t border-gray-300">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{employee.name}</td>
              <td className="p-4">{employee.email}</td>
              <td className="p-4">{employee.date}</td>
              <td className="p-4">
                <button onClick={() => handleApprove(employee.id)} className="text-green-500 mr-4">Approve</button>
                <button onClick={() => handleDecline(employee.id)} className="text-red-500">Decline</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductApproval;
