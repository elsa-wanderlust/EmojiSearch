const Search = (props) => {
  const { search, setSearch } = props;
  const handleSearchFieldChange = (event) => {
    setSearch(event.target.value);
  };

  //   console.log(setSearch);
  return (
    <form>
      <input
        className={search !== "" ? "searchStarted" : "empty"}
        type="text"
        name="fieldSearch"
        placeholder="What emoji are you looking for ? "
        onChange={handleSearchFieldChange}
        value={search}
      />
    </form>
  );
};
export default Search;
