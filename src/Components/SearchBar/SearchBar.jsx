const SearchBar = ({ receiveFilter }) => {

    return (
        <div>
            <input placeholder="Enter Search" onChange={event => {
                console.log(event.target.value)
                receiveFilter(event.target.value)
            }} />
        </div>
    )
}

export default SearchBar