import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer kqIIqEgcOIVz6Vb1GunSnVHDG2EgGS7ZxhTjTqu-FhUswPRNNxDGF8ReoKaMTmRSP5_FKFmVxSOTqNSd4PjoxjDgMa3TArM0w1xS5fqBLCFNPlocIAgjIlEruYzOYnYx',
  },
});
