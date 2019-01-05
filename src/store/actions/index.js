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
  setEducation,
  saveEducation,
}
from "./education"


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