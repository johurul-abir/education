

export const createSlug = (productName) => {
    let slug = productName.toLowerCase();

    slug = slug.replace(/[^\w\s-]/g, '');
  
    slug = slug.replace(/\s+/g, '-');
  
    return slug;
  };