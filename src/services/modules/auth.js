import client from "../";

export const login = async (data) => {
  return await client.post(`auth/login`,data);
};

export const register=async data=> {
  return await client.post(`auth/register`,data);
};

export const current = async () => {
    return await client.get(`auth/me`);
};

export const updateData = async data=> {
    return await client.put(`auth/update-data`,data);
};  

export const updatePassword = async data=> {
    return await client.put(`auth/update-password`,data);
};

export const forgetPassword= async data => {
  return await client.post(`auth/forget-password`,data);
};

export const resetPassword= async (token,password) => {
    return await client.put(`auth/reset-password/${token}`,password);
};
  
export const logout = async (data) => {
    return await client.post(`auth/logout`,data);
  };
  