import React, { useState } from 'react';
import { Paper, Grid } from '@material-ui/core';
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

export default function FormLayout({ page, route, setOpenForm }) {
  const [state, setStates] = useState({});
  const [image, setImage] = useState([]);
  // const [errors, setErrors] = useState({});

  const handleInputChange = ({ target: { value, name } }) => {
    setStates(_state => ({ ..._state, [name]: value }));
  };


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
    let uploadedImages = []
    try {
      if(image.length){

        const promises = image.map(
          async img => {
            const { data } = await axios.post('/api/v1/upload', {type: img.type})
            uploadedImages.push(data.imageUrl)
            await axios.put(data.uploadURL, img, {
              headers: {
                "Content-Type" : img.type
              }
            })
          }
        )
        await Promise.all(promises)
        const result = await axios.post(route, {...state, images: uploadedImages})
        setOpenForm(false)
      } else {
        const result = await axios.post(route, {...state, images: uploadedImages})
        setOpenForm(false)
      }
    }catch(e) {
      console.log(e)
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
    </>
  );
}
