export class ApiRoutes{
    static BaseUrl = process.env.REACT_APP_API_BASE_URL || "https://reqres.in";
    static GetUsers = `${this.BaseUrl}/api/users?page=2`;
    
    static GetResources = `${this.BaseUrl}/api/unknown`;
};