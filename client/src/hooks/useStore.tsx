import { apiGet, apiPost } from "services/api"

export const useStore = () => {
    const getitems = () => {
        return apiGet("api/shop/getitems")
    }

    const buy = (id : string) => {
        return apiPost("api/shop/buy", {itemId: id, userId: id});
    }
}