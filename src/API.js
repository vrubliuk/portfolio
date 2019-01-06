export const putGeneral = (name, surname, qualification) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(name, surname, qualification);
    }, 1000);
  });
};

export const putContacts = (location, phone, email, github, linkedIn) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(location, phone, email, github, linkedIn);
    }, 1000);
  });
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
