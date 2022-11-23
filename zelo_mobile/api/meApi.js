import axiosClient from './axiosClient';

const BASE_URL = '/me';

const meApi = {
  fetchProfile: () => {
    return axiosClient.get(`${BASE_URL}/profile`);
  },

 

  updateCoverImageBase64: (image, uploadProgress) => {
    const url = `${BASE_URL}/cover-image/base64`;

    const config = {
      onUploadProgress: progressEvent => {
        if (typeof uploadProgress === 'function') {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          uploadProgress(percentCompleted);
        }
      },
    };

    return axiosClient.patch(url, image, config);
  },
};

export default meApi;
