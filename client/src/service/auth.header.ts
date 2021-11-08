export default function authHeader() {
    const userStr = localStorage.getItem("user");
    let user = null;
    if (userStr) {
        user = JSON.parse(userStr);
    }

    if (user && user.access_token) {
        // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
        return {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `${user.token_type} ${user.access_token}`
        };       // for Node.js Express back-end
    } else {
        return {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        };
    }
}
