export default function Searchbar(props) {
  function toggleStockedProd(e) {
    props.onToggleStockedProd(e.target.checked);
  }

  function applyFilterText(e) {
    props.onAapplyFilterText(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        required
        id="search"
        onChange={applyFilterText}
        placeholder="Search..."
      />
      <div>
        <input
          type="checkbox"
          onChange={toggleStockedProd}
          required
          id="stocked"
        />
        <span>Show only stocked products</span>
      </div>
      <br />
    </div>
  );
}
