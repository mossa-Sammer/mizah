const { project } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { rows } = await project.getProjects();
    res.json(rows);
  } catch (e) {
    next(e);
  }
};
