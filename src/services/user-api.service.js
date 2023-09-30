import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:3001/info',
});

export class UserApiService {

    getSources() {
        return http.get(`http://localhost:3001/user_info/`);
    }
}