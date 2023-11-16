const db = require("../models");
const Employee = db.employees;
const { findOne } = require('../controllers/employee.controller');

describe('Employee findOne function', () => {
  // Assuming you have a valid employee ID for testing
  const validEmployeeId = '65556821b5900a755dcc0b24';

  it('should retrieve an employee by ID', async () => {
    // Mock the Employee model's findById function
    Employee.findById = jest.fn().mockResolvedValue({
      _id: validEmployeeId,
      firstname: 'Jenyll',
      lastname: 'Mabborang',
      department: 'Surgery',
      // Add more properties based on your Employee schema
    });

    const mockRequest = {
      params: {
        id: validEmployeeId,
      },
    };

    const mockResponse = {
      send: jest.fn(), // Mock the send function
      status: jest.fn(() => mockResponse),
    };

    // Perform the findOne function without a try-catch block
    await findOne(mockRequest, mockResponse);

    // Verify if mockResponse.send was called with the expected data
    expect(mockResponse.send).toHaveBeenCalled();
    const sentData = mockResponse.send.mock.calls[0][0];
    expect(sentData).toEqual(expect.objectContaining({
      _id: validEmployeeId,
      firstname: 'Jenyll',
      lastname: 'Mabborang',
      department: 'Surgery',
      // Add more expectations as needed based on your Employee schema
    }));
  });
});
