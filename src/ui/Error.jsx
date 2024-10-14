function Error({ error, resetErrorBoundary }) {
  return (
    <div className="h-screen  text-blue-950 gap-3 flex items-center justify-center flex-col bg-blue-950">
      <p className="text-white text-4xl font-semibold p-3">
        Something Went Wrong!⚠️ Please check your internet.
      </p>
      <button
        className="bg-slate-100 animate-wiggle active:bg-slate-200 text-xl font-semibold p-3"
        onClick={resetErrorBoundary}
      >
        Try Again
      </button>
    </div>
  );
}

export default Error;
