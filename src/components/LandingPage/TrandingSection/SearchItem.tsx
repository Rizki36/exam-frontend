const SearchItem = () => {
  return (
    <form action="/books" className="w-full input-group">
      <input
        id="search-book-input"
        name="search"
        type="text"
        placeholder="Search…"
        className="w-full input input-bordered"
      />
      <button
        id="search-submit-button"
        className="btn btn-square"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchItem;
