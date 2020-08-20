const {
  project: { getProjectById },
} = require('../../database/queries');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ msg: 'bad request' });
  }
  try {
    const {
      rows: [project],
    } = await getProjectById(id);
    res.json(project);
  } catch (e) {
    next(e);
  }
};
