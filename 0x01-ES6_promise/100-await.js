import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return { photo, user };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}

module.exports = asyncUploadUser;
