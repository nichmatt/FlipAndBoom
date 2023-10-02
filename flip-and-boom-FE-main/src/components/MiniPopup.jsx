export default function MiniPopup({ message }) {
  return (
    <>
      <div className="absolute bg-gray-50 w-20 h-8 top-0 rounded">
        <span className="inline-block absolute bg-gray-50 w-10 h-10 translate-x-1/2 -bottom-4 rotate-45 rounded"></span>
        <p><span>lorem</span></p>
      </div>
    </>
  );
}
