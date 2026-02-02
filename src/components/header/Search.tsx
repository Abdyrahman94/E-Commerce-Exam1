import SearchIcon from '../../assets/MagnifyingGlass.svg'


function Search() {
    return (
        <div className="relative">
            <input type="text" placeholder="Search for anything..." className="bg-white rounded-xs w-140 py-3 px-3 outline-none" />
            <img src={SearchIcon} className='absolute top-3.5 right-4' alt="" />
        </div>
    )
}

export default Search