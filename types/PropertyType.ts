export type TProperty = {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  amenities: string[];
  availability: "AVAILABLE" | "RENTED" | "UNAVAILABLE";

  category: TCategory;
  landlord: TLandlord;

  averageRating: number;
  reviewCount: number;
  rentalRequestCount: number;

  createdAt: string;
  updatedAt: string;
};

export type TCategory = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TLandlord = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: "LANDLORD";
  status: "ACTIVE" | "INACTIVE" | "BLOCKED";
  address: string | null;
  createdAt: string;
};

export type TPaginationMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type TPropertiesResponse = {
  success: boolean;
  message: string;
  meta: TPaginationMeta;
  data: TProperty[];
};