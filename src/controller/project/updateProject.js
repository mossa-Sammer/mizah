const { project } = require('../../database/queries');

module.exports = async (req, res, next) => {
  const { id, title, titleAr, description, descriptionAr, imageUrl } = req.body;
  try {
    const {
      rows: [updatedProject],
    } = await project.updateProject({
      id,
      title,
      titleAr,
      description,
      descriptionAr,
      imageUrl,
    });
    res.json({
      msg: 'project updated successfully',
      updatedProject,
    });
  } catch (e) {
    next(e);
  }
};
