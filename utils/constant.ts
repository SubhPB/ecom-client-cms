// Byimaan

const ApiRootURL = process.env.NEXT_PUBLIC_API_URL!;

export const apiRootURL = ApiRootURL.at(-1) === '/' ? ApiRootURL.slice(0, -1) : ApiRootURL

// GET
export const getCategoriesApiURL = apiRootURL + '/categories';
