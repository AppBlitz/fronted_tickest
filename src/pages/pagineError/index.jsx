const PagineError = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        {"Page Not Found"}
      </h1>
      <p className="text-lg text-gray-700">
        {"To verify that the route is correct or try again."}
      </p>
      <a
        href="/"
        className="mt-4 text-blue-500 hover:text-blue-700 transition-colors"
      >
        {"Go back to Home"}
      </a>
    </div>
  );
};

export { PagineError };
