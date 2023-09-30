import axios from "axios";

const http = axios.create({
    baseURL: 'https://apimocha.com/fastservicesapi/posts',
});

export class UserApiService {

    getSources() {
        return http.get(`https://apimocha.com/fastservicesapi/posts`);
    }
}