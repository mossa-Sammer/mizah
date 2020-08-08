const { project } = require('../../database/queries');

module.exports = async (req, res, next) => {
  const { title, titleAr, description, descriptionAr, imageUrl } = req.body;
  try {
    const {
      rows: [addedProject],
    } = await project.addProject({
      title,
      titleAr,
      description,
      descriptionAr,
      imageUrl,
    });
    res.json({ msg: 'project added successfully', addedProject });
  } catch (e) {
    next(e);
  }
};
