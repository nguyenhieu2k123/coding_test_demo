import { api } from "@/trpc/server";
import RestaurantList, { type Restaurant } from "./modules/Restaurants/RestaurantList";


export default async function Home() {
	const data: Restaurant[] = await api.restaurants.getRestaurants()

  return (
		<div className="px-5 pb-24">
			<RestaurantList data={data}/>
		</div>
  );
}