BEGIN;

DROP SCHEMA public CASCADE;
CREATE SCHEMA public;




CREATE TABLE "user" (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR
);

CREATE TABLE slider(
    slider_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    title_ar VARCHAR(255),
    description VARCHAR,
    description_ar VARCHAR,
    btn_name VARCHAR(255),
    btn_name_ar VARCHAR(255),
    btn_link VARCHAR
);

CREATE TABLE service (
    service_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    title_ar VARCHAR(255),
    description VARCHAR,
    description_ar VARCHAR,
    image_url VARCHAR(255)
); 

CREATE TABLE testimonial (
    testimonial_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    name_ar VARCHAR(255),
    said VARCHAR,
    said_ar VARCHAR,
    image_url VARCHAR
);

CREATE TABLE project(
    project_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    title_ar VARCHAR(255),
    description VARCHAR,
    description_ar VARCHAR,
    video_url VARCHAR
);

CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    name_ar VARCHAR(255),
    logo_url VARCHAR
);

CREATE TABLE feature (
    feature_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    title_ar VARCHAR(255),
    description VARCHAR,
    description_ar VARCHAR
);

CREATE TABLE blog (
    blog_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    title_ar VARCHAR(255),
    description VARCHAR,
    description_ar VARCHAR,
    image_url VARCHAR
);

CREATE TABLE message(
    message_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone_no VARCHAR(255),
    body VARCHAR
);

CREATE TABLE website (
    site_id SERIAL PRIMARY KEY,
    facebook_url VARCHAR,
    twitter_url VARCHAR,
    instagram_url VARCHAR,
    google_url VARCHAR,
    website_url VARCHAR,
    email VARCHAR,
    whatsapp_no VARCHAR,
    whatsapp_link VARCHAR,
    address VARCHAR,
    address_ar VARCHAR,
    description VARCHAR,
    description_ar VARCHAR,
    logo_url VARCHAR,
    about_us_description VARCHAR,
    about_us_description_ar VARCHAR,
    about_us_image_url VARCHAR,
    video_url VARCHAR,
    video_url_ar VARCHAR,
    our_values VARCHAR,
    our_values_ar VARCHAR,
    our_mission VARCHAR,
    our_mission_ar VARCHAR,
    our_vision VARCHAR,
    our_vision_ar VARCHAR
);  

create table project_image (
    project_image_id SERIAL PRIMARY KEY,
    project_id INT REFERENCES project(project_id) ON DELETE CASCADE,
    image_url VARCHAR
);

CREATE table blog_image (
    blog_image_id SERIAL PRIMARY KEY,
    blog_id INT REFERENCES blog(blog_id) ON DELETE CASCADE,
    image_url VARCHAR
);

COMMIT;