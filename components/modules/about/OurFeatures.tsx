export default function OurFeatures() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold">
          Why Choose Rent Nest?
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">
              For Tenants
            </h3>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Search properties easily</li>
              <li>Send rental requests</li>
              <li>Manage favorite properties</li>
              <li>Secure communication</li>
            </ul>
          </div>


          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">
              For Landlords
            </h3>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Create property listings</li>
              <li>Manage rental requests</li>
              <li>Reach more tenants</li>
              <li>Track property status</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}