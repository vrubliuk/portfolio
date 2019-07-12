import axios from "./axios";

export const getUser = () => {
  return axios.get(`users/${process.env.REACT_APP_USER_ID}`)
}

export const putUser = (_id, payload) => {
  return axios.put(`users/${_id}`, payload)
};

export const putExperiences = experiences => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(experiences);
    }, 1000);
  });
};

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

export const putLanguages = languages => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(languages);
    }, 1000);
  });
};

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