﻿export const putGeneral = (name, surname, qualification) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      console.log(name, surname, qualification);
    }, 1000)
  })
}


export const putContacts = (location, phone, email, github, linkedIn) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      console.log(location, phone, email, github, linkedIn);
    }, 1000)
  })
}
