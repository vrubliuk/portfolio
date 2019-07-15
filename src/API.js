import axios from "./axios";

export const getUser = () => {
  return axios.get(`users/${process.env.REACT_APP_USER_ID}`);
};

export const putUser = (_id, payload) => {
  return axios.put(`users/${_id}`, payload);
};

// experiences

export const postExperience = payload => axios.post("experiences", payload);

export const putExperience = (id, payload) => axios.put(`experiences/${id}`, payload);

export const deleteExperience = id => axios.delete(`experiences/${id}`)



export const putSkills = skills => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(skills);
    }, 1000);
  });
};

export const putEducation = (speciality, institution, startDate, endDate) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(speciality, institution, startDate, endDate);
    }, 1000);
  });
};

// languages

export const postLanguage = payload => axios.post("languages", payload);

export const putLanguage = (id, payload) => axios.put(`languages/${id}`, payload);

export const deleteLanguage = id => axios.delete(`languages/${id}`)



// resume

export const putResume = file => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(file);
    }, 1000);
  });
};

export const deleteResume = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("delete resume");
    }, 1000);
  });
};

export const putProjects = projects => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(projects);
    }, 1000);
  });
};

export const putProjectScreenshot = (projectId, file) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(projectId, file);
    }, 1000);
  });
};

export const deleteProjectScreenshot = projectId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(projectId);
    }, 1000);
  });
};
