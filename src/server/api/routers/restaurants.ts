import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const restaurantsRouter = createTRPCRouter({
	getRestaurants: publicProcedure.query(({ ctx }) => {
		return ctx.db.restaurant.findMany({
			include: {
				featured: true,
				images: true
			},
			orderBy: {
        rating: "desc",
      },
		});
	}),
	addFavorite: publicProcedure
		.input(z.object({
			id: z.string(),
			is_favorite: z.boolean()
		}))
		.mutation(async ({ input, ctx }) => {
			const { id, is_favorite } = input;
			return await ctx.db.restaurant.update({
				where: { id },
				data: { is_favorite },
			});
		}),
});
