import axios from "axios";

const http = axios.create({
    baseURL: 'https://apimocha.com/fastservicesapi/posts',
});

export class UserApiService {

    getSources() {
        return http.get(`https://aplicacionesweb-grupo1.github.io/API-Fake/jsonserver/jsonserver/db.json`);
    }
}