export default function PropertyNotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Property Not Found</h1>
      <p className="mt-3 text-muted-foreground">
        The property you are looking for doesnot exist.
      </p>
    </div>
  );
}