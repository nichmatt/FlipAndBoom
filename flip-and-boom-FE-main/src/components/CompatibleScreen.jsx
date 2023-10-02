export default function CompatibleScreen() {
  return (
    <>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[55] pointer-events-auto">
        <h1 className="p-5 bg-slate-200 text-2xl rounded-md uppercase text-center">Your Curent screen is not compatible to play game</h1>
      </div>
      <div className=" fixed left-0 top-0 right-0 bottom-0 bg-white opacity-30 z-50" />
    </>
  );
}
