import { GlobalContext } from "../state/GlobalContext"
import { useContext } from "react"

const usePrices = () => {

    const { state } = useContext(GlobalContext)

    return state.marketData.price

}

export default usePrices