"use client"
import React, { useState } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import { type Image as ImageType } from '../RestaurantList';

type img = {
  id: string,
  url: string,
  width: number,
  height: number,
  alt: string
};

type Props = {
	images: ImageType[],
};

export default function RestaurantCarousel({ images }: Props) {
  const fallbackSrc = '/assets/images/404-image.webp';

  const CustomImage = ({ src, fallbackSrc, width = 358, height = 200, alt = "", className }: {
    src: string, fallbackSrc: string, width: number, height: number, alt: string, className?: string
  }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [loading, setLoading] = useState(true);

    return (
      <div className={`${className} relative`} style={{ width, height }}>
        {loading && <div className="skeleton absolute top-0 left-0 w-full h-full rounded-xl" />}
        <Image
          src={imgSrc}
          width={width}
          height={height}
          alt={alt}
          className={`rounded-xl ${loading ? 'hidden' : ''}`}
          onLoadingComplete={() => setLoading(false)}
          onError={() => {
            setImgSrc(fallbackSrc);
            setLoading(false);
          }}
        />
      </div>
    );
  };

  return (
		<div className='custom-dots'>
			<Carousel
				autoplay
				dots={{
					className: `bg-[#00000090] w-fit !m-auto !py-2 !px-4 rounded-xl`
				}}
			>
				{
					images.map((img: ImageType) => (
						<div key={img.id} className='max-h-[200px] rounded-xl overflow-hidden'>
							<CustomImage
								src={img.url}
								fallbackSrc={fallbackSrc}
								width={358}
								height={200}
								alt={"img.alt"}
								className='rounded-xl'
							/>
						</div>
					))
				}
			</Carousel>
		</div>
  );
}
