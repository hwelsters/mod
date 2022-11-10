import { apiGet, apiPost } from "services/api";
import { useAuth } from "./useAuth";

export const useStore = () => {
  const { user, setUser } = useAuth();

  const getitems = async () => {
    const res = await apiGet("api/shop/getitems");
    console.log(res);
    return res.data;
  };

  const buy = async (id: number) => {
    console.log(user);

    const config = {
      headers: {
        token: user.token,
      },
    };

    const res = await apiPost(
      "api/shop/buy",
      { itemId: id, userId: user.id },
      config
    );

    const other = res.data;

    const token = user.token;
    setUser({token, ...other});
  };

  return {
    getitems,
    buy,
  };
};
