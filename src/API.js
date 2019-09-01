import axios from "./axios";
import objectToFormdata from "object-to-formdata";

// auth
export const logIn = (login, password) => {
  return axios.post("auth/login", { login, password });
};

// users
export const getUser = () => {
  return axios.get(`users/${process.env.REACT_APP_USER_ID}`);
};
export const putUser = (_id, payload) => {
  return axios.put(`users/${_id}`, objectToFormdata(payload), {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

// experiences
export const postExperience = payload => axios.post("experiences", payload);
export const putExperience = (id, payload) => axios.put(`experiences/${id}`, payload);
export const deleteExperience = id => axios.delete(`experiences/${id}`);

// skills
export const postSkill = payload => axios.post("skills", payload);
export const putSkill = (id, payload) => axios.put(`skills/${id}`, payload);
export const deleteSkill = id => axios.delete(`skills/${id}`);

// educations
export const postEducation = payload => axios.post("educations", payload);
export const putEducation = (id, payload) => axios.put(`educations/${id}`, payload);
export const deleteEducation = id => axios.delete(`educations/${id}`);

// languages
export const postLanguage = payload => axios.post("languages", payload);
export const putLanguage = (id, payload) => axios.put(`languages/${id}`, payload);
export const deleteLanguage = id => axios.delete(`languages/${id}`);

// projects
export const postProject = payload => axios.post("projects", payload);
export const putProject = (id, payload) => axios.put(`projects/${id}`, payload);
export const putProjectScreenshot = (id, screenshot) => {
  return axios.put(`projects/${id}/screenshot`, objectToFormdata({ screenshot }), {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};
export const deleteProject = id => axios.delete(`projects/${id}`);
export const deleteProjectScreenshot = id => axios.delete(`projects/${id}/screenshot`);

export const getResume = id =>
  axios({
    method: "get",
    url: `files/resume/${id}`,
    responseType: "stream"
  });
