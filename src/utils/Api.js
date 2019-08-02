import axios from 'axios';

let url = `http://192.168.20.211:8050`;
if (window.location.href.includes(`localhost`)) {
    url = `http://localhost:9000`;
}


export default axios.create({
    baseURL: url,
    headers: {'x-auth': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhNWU2OTAwYy05ZWVkLTRjZjUtYTExYy0yNmYxMTQzYWIwYjgiLCJpYXQiOjE1NjA2OTI2MDR9.tK2YVMYqCX0WPruFONC35X7vI__X5kwPLe4O3mxmwQk`}
});