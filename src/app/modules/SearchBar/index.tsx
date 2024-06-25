import React from 'react'
import { Input } from 'antd';
import SearchIcon from '@/app/assets/Icon/search-icon.svg'

type Props = { keywords: string }

export default function SearchBar({keywords}: Props) {
	return (
		<div className='px-5 py-8'>
			<Input
				placeholder="맛집 이름을 검색해보세요"
				style={{
					backgroundColor: "#F9FAFB",
					boxShadow: "rgba(0, 0, 0, 0.20) 0px 5px 5px",
					padding: "8px 16px",
					fontWeight:600
				}}
				prefix={<SearchIcon />}
			/>
		</div>
	)
}