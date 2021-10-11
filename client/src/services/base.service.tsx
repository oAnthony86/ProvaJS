import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:15505",
    headers: {
        'access-control-allow-origin': '*',
        "Content-type": "application/json"
    }
});

