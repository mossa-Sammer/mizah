const { project } = require('../../database/queries');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const {
      rows: [deletedProject],
    } = await project.deleteProject(id);
    res.json({
      msg: 'project deleted successfully',
      deletedProject,
    });
  } catch (e) {
    next(e);
  }
};
