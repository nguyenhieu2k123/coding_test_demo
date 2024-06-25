"use client"
import React from 'react';
import RestaurantItem from '../RestaurantItem';

type featured = {
	id: string;
  text:string
  icon: string
}
export interface Image {
	id: string;
	url: string;
	restaurant_id: string;
}
export interface Restaurant {
	// key: string;
	id:string;
	name: string;
	featured: featured | null;
	rating: number;
	rating_count: number;
	description: string;
	images: Image[];
	category: string;
	price_range: string;
	is_favorite: boolean;
}

interface Props {
	data: Restaurant[];
}

export default function RestaurantList({ data }: Props) {
	return (
		<div className='flex flex-col gap-4'>
			{data?.map((item, index) => (
				<React.Fragment
					key={index}
				>
					<RestaurantItem
						// key={item.key}
						id={item.id}
						name={item.name}
						featured={item.featured}
						rating={item.rating}
						rating_count={item.rating_count}
						description={item.description}
						images={item.images || []}
						category={item.category}
						price_range={item.price_range}
						is_favorite={item.is_favorite}
					/>
				</React.Fragment>
			))}
		</div>
	);
}
