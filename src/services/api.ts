// src/services/api.ts
export async function loginAPI(email: string, password: string) {
    // In real life, you'd do:
    // return axios.post('/auth/login', { email, password });
    await new Promise((resolve) => setTimeout(resolve, 500)); // fake delay
    return { data: { userId: '123', email } };
  }
  
  export async function registerAPI(email: string, password: string) {
    // real life: axios.post('/auth/register', { email, password });
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    return { data: { userId: '456', email } };
  }
  