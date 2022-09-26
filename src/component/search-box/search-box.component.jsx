import "./search-box.styles.css"

const SearchBox = ({searchInput}) =>{
    return (
        <input className="search-box" placeholder="search monsters" type="search" onChange={searchInput} />
    )
}

export default SearchBox;