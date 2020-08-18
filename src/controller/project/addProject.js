const { project } = require('../../database/queries');
const { addImage } = require('../images');

module.exports = async (req, res, next) => {
  const { title, titleAr, description, descriptionAr, images } = req.body;
  try {
    const {
      rows: [addedProject],
    } = await project.addProject({
      title,
      titleAr,
      description,
      descriptionAr,
    });
    console.log(req.body);

    console.log(title, titleAr, description, descriptionAr, addedProject);
    let addedImages = [];
    if (images) {
      const { rows } = await project.addProjectImages(
        addedProject.project_id,
        images
      );
      addedImages = [...rows];
    }

    res.json({
      msg: 'project added successfully',
      data: { ...addedProject, images: addedImages },
    });
  } catch (e) {
    next(e);
  }
};
