const connection = require('../../config/connection');

const getWebSiteSetting = () =>
  connection.query(
    'SELECT facebook_url, twitter_url, instagram_url, google_url, website_url , email, whatsapp_no , whatsapp_link, address, address_ar,description, description_ar  FROM website WHERE site_id=$1',
    [1]
  );

const editWebSiteSetting = ({
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
}) =>
  connection.query(
    'UPDATE website SET facebook_url=$1,twitter_url=$2,instagram_url=$3,google_url=$4,website_url=$5,email=$6,whatsapp_no=$7,whatsapp_link=$8,address=$9,address_ar=$10,description=$11,description_ar=$12 WHERE site_id=$13 RETURNING *',
    [
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
      1,
    ]
  );

const getAboutUs = () =>
  connection.query(
    'SELECT site_id as id, about_us_description as description,about_us_description_ar as description_ar, video_url, our_values,our_values_ar,our_mission, our_mission_ar,our_vision,our_vision_ar FROM website WHERE site_id=$1',
    [1]
  );

const editAboutUs = ({
  description,
  descriptionAr,
  videoUrl,
  ourValues,
  ourValuesAr,
  ourMission,
  ourMissionAr,
  ourVision,
  ourVisionAr,
}) =>
  connection.query(
    'UPDATE website SET about_us_description=$1,about_us_description_ar=$2,video_Url=$3, our_values=$4,our_values_ar=$5,our_mission=$6,our_mission_ar=$7, our_vision=$8, our_vision_ar=9 WHERE site_id=$10',
    [
      description,
      descriptionAr,
      videoUrl,
      ourValues,
      ourValuesAr,
      ourMission,
      ourMissionAr,
      ourVision,
      ourVisionAr,
      1,
    ]
  );

module.exports = {
  getWebSiteSetting,
  editWebSiteSetting,
  getAboutUs,
  editAboutUs,
};

// const editSocialMedia = ({}) =>
//   connection.query(
//     'UPDATE website SET facebook_url=$1,twitter_url=$2, instagram_url=$3,google_url=$4,website_url=$5,email=$6 WHERE website_id=$7',
//     [facebook, twitter, instagram, google, website, email, 1]
//   );

// const editWhatsApp = ({ whatsAppNo, whatsAppLink }) =>
//   connection.query(
//     'UPDATE website SET whatsapp_no=$1,whatsapp_link=$2 WHERE site_id=$3',
//     [whatsAppNo, whatsAppLink, 1]
//   );

// const editAddress = ({ address, addressAr }) =>
//   connection.query(
//     'UPDATE website SET address=$1,address_ar=$2 WHERE site_id=$3',
//     [address, addressAr, 1]
//   );

// const editDataFeature = ({ description, descriptionAr, imageUrl }) =>
//   connection.query(
//     'UPDATE website SET description=$1, description_ar=$2, image_url=$3 WHERE site_id=$4',
//     [description, descriptionAr, imageUrl]
//   );

// const editLogo = logoUrl =>
//   connection.query('UPDATE website SET logo_url=$1 WHERE site_id=$2', [
//     logoUrl,
//   ]);

// const editAboutUs = ({ description, descriptionAr, imageUrl }) =>
//   connection.query(
//     'UPDATE website SET description=$1,description=$2,image_url=$3 WHERE site_id=$4',
//     [description, descriptionAr, imageUrl, 1]
//   );
