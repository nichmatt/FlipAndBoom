function Button({ callback }) {
  return (
    <>
      <button
        className="py-2 px-3 border border-gray-200 shadow"
        onClick={callback}
      >
        Press me
      </button>
    </>
  );
}

export default Button;
