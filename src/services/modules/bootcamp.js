import client from "../";

export const all = async () => {
  return await client.get(`bootcamps`);
};

export const single=async id=> {
  return await client.get(`bootcamps/${id}`);
};

export const singleWithGeoData=async (zipcode,distance)=> {
  return await client.get(`bootcamps/radius/${zipcode}/${distance}`);
};

export const singleCourses=async (id)=> {
  return await client.get(`bootcamps/${id}/courses`);
};

export const create = async data => {
  return await client.post(`bootcamps`, data);
};

export const put = async (id, data) => {
  return await client.put(`bootcamps/${id}`, data);
};

export const upload = async (id, data) => {
  return await client.put(`bootcamps/${id}/photo`, data);
};

export const remove = async id => {
  return await client.delete(`bootcamps/${id}`);
};

