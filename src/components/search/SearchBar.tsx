
interface IProps {
    handleSearch: (e:React.ChangeEvent<HTMLInputElement>) => void 
}

export const SearchBar: React.FC<IProps> = ({handleSearch}) =>{
    return (
        <div className="mt-1">
            <input onChange={handleSearch} className="search-input" type="search" placeholder="Search by username or email" title="Search user" />
        </div>
    )
}

export default SearchBar