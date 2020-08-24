const { editWebSiteSetting } = require('../../database/queries');

module.exports = async (req, res, next) => {
  const {
    facebook,
    twitter,
    instagram,
    google,
    website,
    email,
    whatsAppNo,
    whatsAppLink,
    address,
    addressAr,
    description,
    descriptionAr,
  } = req.body;
  console.log(req.body);
  try {
    const {
      rows: [websiteData],
    } = await editWebSiteSetting({
      facebook,
      twitter,
      instagram,
      google,
      website,
      email,
      whatsAppNo,
      whatsAppLink,
      address,
      addressAr,
      description,
      descriptionAr,
    });
    res.json({ msg: 'website data updated successfuly', data: websiteData });
  } catch (e) {
    next(e);
  }
};
