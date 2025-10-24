import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await api.get("/products");
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 daqiqa cache
    retry: 2, // xato bo‘lsa 2 marta qayta urinish
    refetchOnWindowFocus: false, // oynaga qaytganda qayta chaqirmaydi
  });
}
