const { project } = require('../../database/queries');

module.exports = async (req, res, next) => {
  const {
    id,
    title,
    titleAr,
    description,
    descriptionAr,
    videoUrl,
    imageUrl,
  } = req.body;
  try {
    const {
      rows: [updatedProject],
    } = await project.updateProject({
      id,
      title,
      titleAr,
      description,
      descriptionAr,
      videoUrl,
    });
    res.json({
      msg: 'project updated successfully',
      updatedProject,
    });
  } catch (e) {
    next(e);
  }
};
