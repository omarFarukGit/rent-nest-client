const stats = [
  {
    value: "10K+",
    label: "Properties Listed",
  },
  {
    value: "5K+",
    label: "Happy Tenants",
  },
  {
    value: "2K+",
    label: "Trusted Landlords",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-primary">
              {item.value}
            </h2>

            <p className="mt-2 text-muted-foreground">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}