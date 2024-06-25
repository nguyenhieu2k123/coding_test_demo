"use client";
import React, { useState } from 'react';
import RestaurantCarousel from './Carousel';
import { type Restaurant } from '../RestaurantList';
import BlinkIcon from '@/app/assets/Icon/blink-icon.svg';
import StarIcon from '@/app/assets/Icon/star-icon.svg';
import WishListIcon from '@/app/assets/Icon/wishlist-icon.svg';
import WishListActiveIcon from '@/app/assets/Icon/wishlist-active-icon.svg';
import { STORE_CATEGORY } from '@/constants';
import { api } from '@/trpc/react';

export default function RestaurantItem({
	// key,
	id,
	name,
	featured,
	rating,
	rating_count,
	description,
	images,
	category,
	price_range,
	is_favorite
}: Restaurant) {

	const [isActive, setIsActive] = useState(is_favorite);

	const updateFavoriteStatus = api.restaurants.addFavorite.useMutation({
		onSuccess: () => {
			setIsActive((prev) => !prev);
		},
		onError: (error) => {
			console.error("Error updating favorite status:", error);
		}
	});

	const handleFavoriteToggle = () => {
		updateFavoriteStatus.mutate({ id, is_favorite: !isActive });
	};

	return (
		<div key={id} className="flex gap-1 flex-col w-full">
			<div className="relative">
				<div className="absolute top-3 right-2 z-10 cursor-pointer" onClick={handleFavoriteToggle}>
					{isActive ? <WishListActiveIcon width={36} height={36} /> : <WishListIcon width={36} height={36} />}
				</div>
				<RestaurantCarousel images={images} />
			</div>
			<div className="flex gap-1 items-center text-[#FF692E]">
				<BlinkIcon width={12} height={12} />
				{featured?.text}
			</div>
			<div className="flex items-center justify-between gap-1">
				<div className="text-[#344054] font-semibold truncate max-w-[75%]">{name}</div>
				<div className="flex items-center gap-1">
					<StarIcon width={18} height={18} />
					<div className="flex items-center gap-1">
						<span>{rating}</span>
						<span>({rating_count})</span>
					</div>
				</div>
			</div>
			<div className="text-[#475467] truncate max-w-full">{description}</div>
			<div className="text-[#475467] truncate max-w-full">
				{STORE_CATEGORY[category as keyof typeof STORE_CATEGORY]}
				{price_range ? ` · ${price_range}` : ''}
			</div>
		</div>
	);
}
