const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getAll: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getOne: (id) => `${API}/api/${VERSION}/products/${id}`,
    create: `${API}/api/${VERSION}/products/`,
    update: (id) => `${API}/api/${VERSION}/products/${id}`,
    delete: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getAll: `${API}/api/${VERSION}/users`,
    create: `${API}/api/${VERSION}/users`,
    isAvailable: `${API}/api/${VERSION}/users/is-available`,
  },
  categories: {
    getAll: `${API}/api/${VERSION}/categories`,
    getOne: (id) => `${API}/api/${VERSION}/categories/${id}`,
    categoryItems: (id, limit, offset) => `${API}/api/${VERSION}/categories/${id}/products?limit=${limit}&offset=${offset}`,
    create: `${API}/api/${VERSION}/categories`,
    update: (id) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files: {
    get: (filename) => `${API}/api/${VERSION}/files/${filename}`,
    create: `${API}/api/${VERSION}/files/upload`,
  },
};

export default endPoints;
