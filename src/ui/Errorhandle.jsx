function Errorhandle() {
  return (
    <div className="h-40 text-blue-950 gap-3 flex items-center justify-center flex-col bg-blue-950">
      <p className="text-white text-4xl font-semibold p-3">
        Something Went Wrong!
      </p>
      <button className="bg-slate-100 active:bg-slate-200 text-xl font-semibold p-3">
        Try Again
      </button>
    </div>
  );
}

export default Errorhandle;
