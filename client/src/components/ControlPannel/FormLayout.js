import React, { useState } from 'react';
import { Paper, Grid } from '@material-ui/core';

import Controls from '../controls/Controls';
import { Form } from '../controls/useForm';
import SliderItemForm from './Forms/SliderItemForm';
import AboutUsForm from './Forms/AboutUsForm';
import ServicesItemForm from './Forms/ServicesItemForm';
import TestimonialItemForm from './Forms/TestimonialItemForm';
import ProjectItemForm from './Forms/ProjectItemForm';

export default function FormLayout({ page }) {
  const [state, setStates] = useState({});
  // const [errors, setErrors] = useState({});

  const handleInputChange = ({ target: { value, name } }) => {
    setStates(_state => ({ ..._state, [name]: value }));
  };
  const setImage = file => {
    setStates(_state => ({ ..._state, image: file }));
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
        image={state.image}
      />
    );
  } else if (page === 'services') {
    renderForm = (
      <ServicesItemForm
        handleInputChange={handleInputChange}
        values={state}
        setImage={setImage}
        image={state.image}
      />
    );
  } else if (page === 'testimonial') {
    renderForm = (
      <TestimonialItemForm
        handleInputChange={handleInputChange}
        values={state}
        setImage={setImage}
        image={state.image}
      />
    );
  } else if (page === 'projects') {
    renderForm = (
      <ProjectItemForm
        handleInputChange={handleInputChange}
        values={state}
        setImage={setImage}
        image={state.image}
      />
    );
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
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
