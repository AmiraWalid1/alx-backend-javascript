import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch((message) => {
      console.log(message);
    });
}

module.exports = handleProfileSignup;
