const API_URL = process.env.PRODUCTION ? "165.227.23.80" : "localhost";
const API_PORT = "8080";
export const API_BASE_URL = `http://${API_URL}:${API_PORT}`;
