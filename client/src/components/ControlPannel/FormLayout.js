import React, { useState, useEffect } from 'react';

import { Paper, Grid } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import axios from 'axios';
import Controls from '../controls/Controls';
import { Form } from '../controls/useForm';
import SliderItemForm from './Forms/SliderItemForm';
import AboutUsForm from './Forms/AboutUsForm';
import ServicesItemForm from './Forms/ServicesItemForm';
import TestimonialItemForm from './Forms/TestimonialItemForm';
import ProjectItemForm from './Forms/ProjectItemForm';
import CustomerItemForm from './Forms/CustomerItemForm';
import FeatureItemForm from './Forms/FeatureItemForm';
import SettingsForm from './Forms/SettingsForm';
import BlogItemForm from './Forms/BlogItemForm';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function FormLayout({ page, route, setOpenForm, defaultValues }) {
  if (defaultValues) {
    defaultValues.descriptionAr = defaultValues.description_ar;
    defaultValues.titleAr = defaultValues.title_ar;
    defaultValues.nameAr = defaultValues.name_ar;
    defaultValues.saidAr = defaultValues.said_ar;
    defaultValues.image = defaultValues.image_url;
    defaultValues.facebook = defaultValues.facebook_url;
    defaultValues.twitter = defaultValues.twitter_url;
    defaultValues.instagram = defaultValues.instagram_url;
    defaultValues.google = defaultValues.google_url;
    defaultValues.website = defaultValues.website_url;
    defaultValues.whatsAppNo = defaultValues.whatsapp_no;
    defaultValues.whatsAppLink = defaultValues.whatsapp_link;
    defaultValues.addressAr = defaultValues.address_ar;
    defaultValues.videoUrl = defaultValues.video_url;
    defaultValues.ourMission = defaultValues.our_mission;
    defaultValues.ourMissionAr = defaultValues.our_mission_ar;
    defaultValues.ourValues = defaultValues.our_values;
    defaultValues.ourValuesAr = defaultValues.our_values_ar;
    defaultValues.ourVision = defaultValues.our_vision;
    defaultValues.ourVisionAr = defaultValues.our_vision_ar;
  }
  const [openNotification, setOpenNotification] = useState(false);
  const [state, setStates] = useState({});

  const handleNotifiCationClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenNotification(false);
  };
  useEffect(() => {
    setStates({ ...defaultValues });
  }, [defaultValues]);
  let defaultImage = [];
  if (defaultValues) {
    if (defaultValues.image_url) {
      defaultImage = [defaultValues.image_url];
    }
    if (defaultValues.logo_url) {
      defaultImage = [defaultValues.logo_url];
    }
  }
  const [image, setImage] = useState(defaultImage);
  // const [errors, setErrors] = useState({});
  const handleInputChange = ({ target: { value, name } }) => {
    setStates(_state => ({ ..._state, [name]: value }));
  };

  // const handleInputChange = () => {};

  let renderForm = null;

  if (page === 'slider') {
    renderForm = <SliderItemForm handleInputChange={handleInputChange} values={state} />;
  } else if (page === 'aboutUs') {
    renderForm = (
      <AboutUsForm
        handleInputChange={handleInputChange}
        values={state}
        setImage={setImage}
        image={image}
      />
    );
  } else if (page === 'services') {
    renderForm = (
      <ServicesItemForm
        handleInputChange={handleInputChange}
        values={state}
        setImage={setImage}
        image={image}
      />
    );
  } else if (page === 'testimonial') {
    renderForm = (
      <TestimonialItemForm
        handleInputChange={handleInputChange}
        values={state}
        setImage={setImage}
        image={image}
      />
    );
  } else if (page === 'projects') {
    renderForm = (
      <ProjectItemForm
        handleInputChange={handleInputChange}
        values={state}
        setImage={setImage}
        image={image}
      />
    );
  } else if (page === 'customers') {
    renderForm = (
      <CustomerItemForm
        handleInputChange={handleInputChange}
        values={state}
        setImage={setImage}
        image={image}
      />
    );
  } else if (page === 'features') {
    renderForm = (
      <FeatureItemForm
        handleInputChange={handleInputChange}
        values={state}
        setImage={setImage}
        image={image}
      />
    );
  } else if (page === 'settings') {
    renderForm = (
      <SettingsForm
        handleInputChange={handleInputChange}
        values={state}
        setImage={setImage}
        image={image}
      />
    );
  } else if (page === 'blog') {
    renderForm = (
      <BlogItemForm
        handleInputChange={handleInputChange}
        values={state}
        setImage={setImage}
        image={image}
      />
    );
  }
  const handleSubmit = async e => {
    e.preventDefault();
    const uploadedImages = [];
    try {
      let method = 'post';
      if (page === 'services' && state.service_id) method = 'put';
      if (page === 'testimonial' && state.testimonial_id) method = 'put';
      if (page === 'customers' && state.customer_id) method = 'put';
      if (page === 'projects' && state.project_id) method = 'put';
      if (page === 'features' && state.feature_id) method = 'put';
      if (page === 'blog' && state.blog_id) method = 'put';
      if (page === 'settings') method = 'put';
      if (page === 'aboutUs') method = 'put';

      if (image.length && image[0].type) {
        const promises = image.map(async img => {
          const { data } = await axios.post('/api/v1/upload', { type: img.type });
          uploadedImages.push(data.imageUrl);
          await axios.put(data.uploadURL, img, {
            headers: {
              'Content-Type': img.type,
            },
          });
        });
        await Promise.all(promises);
      }

      if (page === 'customers') {
        if (method === 'put') {
          if (uploadedImages[0]) {
            const result = await axios[method](route, {
              ...state,
              logoUrl: uploadedImages[0],
              id: state.customer_id,
            });
          } else {
            const result = await axios[method](route, {
              ...state,
              logoUrl: state.logo_url,
              id: state.customer_id,
            });
          }
          setStates({});
        } else {
          const result = await axios[method](route, { ...state, logoUrl: uploadedImages[0] });
        }
      } else if (page === 'features') {
        if (method === 'put') {
          const result = await axios[method](route, { ...state, id: state.feature_id });
          setStates({});
        } else {
          const result = await axios[method](route, { ...state });
          setStates({});
        }
      } else if (page === 'blog') {
        if (method === 'put') {
          if (uploadedImages[0]) {
            const result = await axios[method](route, {
              ...state,
              imageUrl: uploadedImages[0],
              id: state.blog_id,
            });
          } else {
            const result = await axios[method](route, {
              ...state,
              imageUrl: state.image_url,
              id: state.blog_id,
            });
          }
          setStates({});
        } else {
          const result = await axios[method](route, { ...state, imageUrl: uploadedImages[0] });
        }
      } else if (page === 'testimonial') {
        if (method === 'put') {
          if (uploadedImages[0]) {
            const result = await axios[method](route, {
              ...state,
              imageUrl: uploadedImages[0],
              id: state.testimonial_id,
            });
          } else {
            const result = await axios[method](route, {
              ...state,
              imageUrl: state.image_url,
              id: state.testimonial_id,
            });
          }
          setStates({});
        } else {
          const result = await axios[method](route, { ...state, imageUrl: uploadedImages[0] });
        }
      } else if (page === 'services') {
        if (method === 'put') {
          if (uploadedImages[0]) {
            const result = await axios[method](route, {
              ...state,
              imageUrl: uploadedImages[0],
              id: state.service_id,
            });
          } else {
            const result = await axios[method](route, {
              ...state,
              imageUrl: state.image_url,
              id: state.service_id,
            });
          }
          setStates({});
        } else {
          const result = await axios[method](route, { ...state, imageUrl: uploadedImages[0] });
        }
      } else if (page === 'aboutUs') {
        if (method === 'put') {
          if (uploadedImages[0]) {
            const result = await axios[method](route, { ...state, imageUrl: uploadedImages[0] });
          } else {
            const result = await axios[method](route, { ...state, imageUrl: state.image_url });
          }
          setStates({});
        } else {
          const result = await axios[method](route, { ...state, imageUrl: uploadedImages[0] });
        }
      } else if (page === 'projects') {
        if (method === 'put') {
          if (uploadedImages[0] && state.project_images[0]) {
            const result = await axios[method](route, {
              ...state,
              imageUrl: [...state.project_images, ...uploadedImages],
              id: state.project_id,
            });
          } else if (uploadedImages[0]) {
            const result = await axios[method](route, {
              ...state,
              imageUrl: uploadedImages,
              id: state.project_id,
            });
          } else if (state.project_images[0]) {
            const result = await axios[method](route, {
              ...state,
              imageUrl: state.project_images,
              id: state.project_id,
            });
          } else {
            const result = await axios[method](route, {
              ...state,
              imageUrl: [],
              id: state.project_id,
            });
          }
          setStates({});
        } else {
          const result = await axios[method](route, { ...state, images: uploadedImages });
        }
      } else {
        const result = await axios[method](route, { ...state, images: uploadedImages });
      }

      // if(method === 'put'){
      //   const id = [state.service_id, state.testimonial_id, state.project_id, state.feature_id, state.blog_id].filter(e => e)[0]
      //   const result = await axios[method](route, { ...state, images: uploadedImages, id });
      // }
      // const result = await axios[method](route, { ...state, images: uploadedImages });
      setOpenNotification(true)
      if (typeof setOpenForm === 'function') setOpenForm(false);
      setStates({});
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Paper>
        <Form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12}>
              {renderForm}
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 50 }}>
                <Controls.Button type="submit" text="Submit" />
              </div>
            </Grid>
          </Grid>
        </Form>
      </Paper>
      <Snackbar open={openNotification} autoHideDuration={2000} onClose={handleNotifiCationClose}  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleNotifiCationClose} severity="success">
          Done !!
        </Alert>
      </Snackbar>
    </>
  );
}
