import { apiGet } from "services/api"

export const useStore = () => {
    const getitems = () => {
        return apiGet("api/shop/getitems")
    }
}