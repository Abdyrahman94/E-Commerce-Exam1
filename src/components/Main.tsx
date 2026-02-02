import Banner from "./Banner"
import Feature from "./Feature"


function Main() {
    return (
        <div>
            <div className="container mx-auto px-10">
                <div className="py-5">
                    <Banner />
                </div>
                <div>
                    <Feature/>
                </div>
            </div>
        </div>
    )
}

export default Main