import { ClearBtnProvider } from "../contexts/ClearBtnContext"
import ShopTitle from "../components/ShopTitle"
import MobileFilterBar from "../components/MobileFilterBar"
import BodyShop from "../components/BodyShop"
import Header from "../components/Header"

function Shop(){
    return(
        <ClearBtnProvider>
            <ShopTitle />
            <MobileFilterBar />
            <BodyShop />
        </ClearBtnProvider>
    )
}

export default Shop