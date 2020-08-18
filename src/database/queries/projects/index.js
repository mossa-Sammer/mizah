const getProjects = require('./getProjects');
const { addProject, addProjectImages } = require('./addProject');
const updateProject = require('./updateProject');
const deleteProject = require('./deleteProject');

module.exports = {
  getProjects,
  addProject,
  addProjectImages,
  updateProject,
  deleteProject,
};
