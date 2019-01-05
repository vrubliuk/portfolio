export {
  setToken,
  logIn,
  logOut
}
from "./auth";

export {
  setGeneral,
  setContacts,
  saveContacts,
  setEducation,
  saveEducation,
}
from "./profile"

export {
  addSkillsCategory,
  updateSkillsCategoryName,
  moveSkillsCategory,
  deleteSkillsCategory,
  addSkillsCategoryTechnology,
  updateSkillsCategoryTechnology,
  moveSkillsCategoryTechnology,
  deleteSkillsCategoryTechnology,
  saveSkills
}
from "./skills"

export {
  setLanguage,
  addLanguage,
  moveLanguage,
  deleteLanguage,
  saveLanguages
}
from "./languages"




export {
  getProjects
}
from "./projects"