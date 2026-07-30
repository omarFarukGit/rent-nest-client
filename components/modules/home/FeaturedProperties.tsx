import PropertyCard from "./PropertyCard";


const properties = [
  {
    id: "1",
    title: "Modern Family Apartment",
    location: "Dhanmondi, Dhaka",
    price: 25000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    image: "/images/property-1.jpg",
  },

  {
    id: "2",
    title: "Luxury Villa",
    location: "Uttara, Dhaka",
    price: 50000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    image: "/images/property-2.jpg",
  },

  {
    id: "3",
    title: "Premium Office Space",
    location: "Gulshan, Dhaka",
    price: 70000,
    type: "Office",
    bedrooms: 0,
    bathrooms: 2,
    image: "/images/property-3.jpg",
  },

  {
    id: "4",
    title: "Cozy Small House",
    location: "Mirpur, Dhaka",
    price: 18000,
    type: "House",
    bedrooms: 2,
    bathrooms: 1,
    image: "/images/property-4.jpg",
  },
];


export default function FeaturedProperties() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">


        {/* Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Featured Properties
            </h2>

            <p className="mt-3 text-muted-foreground">
              Explore our hand-picked rental properties.
            </p>
          </div>


        </div>


        {/* Cards */}
        <div
          className="
            mt-10
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}

        </div>


      </div>
    </section>
  );
}