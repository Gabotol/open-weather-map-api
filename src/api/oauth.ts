import { API_BASE_URL_OAUTH, password, username } from "../constants/apiUrl";

interface OAuthResponse {
    access_token: string;
    // Add other fields if there are any in the response
}

export const getOauthToken = async (): Promise<string> => {
    try {
        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
        headers.set('Origin', 'http://localhost');
        headers.set('Access-Control-Allow-Origin', 'http://localhost');
        headers.set('Access-Control-Allow-Credentials', 'true');
        headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
        headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        const response = await fetch(`${API_BASE_URL_OAUTH}/api/v1/token`, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data: OAuthResponse = await response.json();
        const token = data.access_token;
        return token;
    } catch (err) {
        throw err;
    }
}

export default getOauthToken;
