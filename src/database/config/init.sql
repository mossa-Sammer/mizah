BEGIN;
insert into "user" (email,password) VALUES ('admin@gmail.com',123456);
insert into website (facebook_url) VALUES (null); 
COMMIT;