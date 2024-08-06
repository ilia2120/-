export interface Allprodacts {
  products: products[];
  total: number;
  skip: number;
  limit: number;
}
export interface dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface reviews {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
export interface meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface products {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[] | string;
  brand: string;
  sku: string;
  weight: number;
  dimensions: dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: reviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: meta;
  thumbnail: string;
  images: string[];
}

export interface prodactss {
  id: number;
  title: string;
  category: string;
  total: number;
  skip: number;
  limit: number;
}

export interface category {
  slug: string;
  name: string;
  url: string;
}

export interface posts {
  id: number;
  products: pordpost[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface pordpost {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
}
export interface ps {
  id: number;
  quantity: number;
}

export interface comments {
  comments: comment[];
  total: number;
  skip: number;
  limit: number;
}

export interface comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
}
