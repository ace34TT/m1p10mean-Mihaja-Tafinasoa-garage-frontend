export const baseUrl = 'http://localhost:3000/api/';

const repairsUrl = 'repairs/';
export const repairsUrls = {
  insert: baseUrl + repairsUrl + '/',
  unconfirmed: baseUrl + repairsUrl + '/unconfirmed/',
  confirm: baseUrl + repairsUrl + '/confirm/',
};
