import Searchbar from './Searchbar';

const MirroredNavbar = () => {

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-black  min-vh-100 position-fixed" style={{ width: '250px' }}>
            <Searchbar />
        </div>
    )
}

export default MirroredNavbar;