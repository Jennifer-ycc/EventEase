import React, { useState } from 'react';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const [customers, setCustomers] = useState(customersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // Pagination logic
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const handleDelete = (id) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  };

  const handleSort = (column) => {
    const isAscending = sortColumn === column && sortDirection === 'asc';
    const newDirection = isAscending ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(newDirection);

    const sortedCustomers = [...customers].sort((a, b) =>
      newDirection === 'asc'
        ? a[column] > b[column]
          ? 1
          : a[column] < b[column]
          ? -1
          : 0
        : b[column] > a[column]
        ? 1
        : b[column] < a[column]
        ? -1
        : 0
    );
    setCustomers(sortedCustomers);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              {customersGrid.map((column) => (
                <th
                  key={column.field}
                  className="border-b px-4 py-2 cursor-pointer"
                  onClick={() => handleSort(column.field)}
                >
                  {column.headerText}
                  {sortColumn === column.field && (
                    <span>{sortDirection === 'asc' ? ' ↑' : ' ↓'}</span>
                  )}
                </th>
              ))}
              <th className="border-b px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.id}>
                {customersGrid.map((column) => (
                  <td key={column.field} className="border-b px-4 py-2">
                    {customer[column.field]}
                  </td>
                ))}
                <td className="border-b px-4 py-2">
                  <button
                    onClick={() => handleDelete(customer.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <button
            onClick={() => handlePagination(currentPage - 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of {Math.ceil(customers.length / customersPerPage)}
          </span>
          <button
            onClick={() => handlePagination(currentPage + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
            disabled={currentPage === Math.ceil(customers.length / customersPerPage)}
          >
            Next
          </button>
        </div>
        <div>
          <span className="text-sm text-gray-500">Total Customers: {customers.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Customers;
