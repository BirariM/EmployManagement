import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8082/api/emp/';

export const listEmployees = () => {
    return axios.get(EMPLOYEE_BASE_REST_API_URL)
};

export const create = (employee) => {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
}

export const getById = (employeeId) => {
    return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
}

export const update = (employeeId, employee) => {
    return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId, employee);
}

export const deleteEmployee = (employeeId) => {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
}