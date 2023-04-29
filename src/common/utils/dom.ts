import classNames, { ClassNamesType } from "../classNames";

export const addBodyClass = (className: ClassNamesType) => {
  document.body.classList.add(classNames[className]);
};

export const removeBodyClass = (className: ClassNamesType) => {
  document.body.classList.remove(classNames[className]);
};
