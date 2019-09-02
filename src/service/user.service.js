// import config from 'config';
// import { authHeader } from '../auth-header';

// export const userService = {
//     login,
//     logout,
//     register,
//     getAll,
//     getById,
//     update,
//     delete: _delete
// };
import axios from "axios";

export default class userService {
    async getUsers() {
        return await axios.get('http://localhost:3000/user').then(res => res.data);
    }

    async getUsersById(id) {
        return await axios.get('http://localhost:3000/user/' + id).then(res => res.data);
    }

    async logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
    }

    async login(username, password) {
        let ans='false'
        await axios.get('http://localhost:3000/user').then(res => {
            
            for(let i=0;i<res.data.length;i++){
                if(res.data[i].username==username && res.data[i].password==password)
                    ans='true';
            }
        });
        return ans;
    }

    async addUser(user){
        await axios.post('http://localhost:3000/user',user);
        return true;
    }
}



// function logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('user');
// }

// function register(user) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
// }

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }


// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text;
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }