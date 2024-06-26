import React from 'react';
import { Col, Row } from 'antd';
import Link from 'next/link';
import HomeIcon from 'public/assets/icon/home-icon.svg';
import CalendarIcon from 'public/assets/icon/calendar-icon.svg';
import MessageIcon from 'public/assets/icon/message-icon.svg';
import SearchIcon from 'public/assets/icon/search-icon-nav.svg';
import HamburgerIcon from 'public/assets/icon/hamburger-icon.svg';

type Props = {
	children?: React.ReactNode,
	url: string,
	label: string,
};

const MenuItem: React.FC<Props> = ({ children, url,label }) => {
	return <Link href={url} className="flex flex-col gap-[2px] justify-center items-center cursor-pointer min-w-12">
		{children}
		<p className={`${label === '검색' ? 'text-[#FF4405]' : ''}`}>
			{label}
		</p>
	</Link>;
};

const MenuNavigation: React.FC = () => {
	return (
		<div
			className="fixed bg-white w-full bottom-0 py-3 border border-t-[1px] border-[#d9d9d9] z-[999999] max-w-[390px]"
		>
			<Row>
				<Col span={24}>
					<div className='flex justify-around w-full'>
						<MenuItem url='/' label="홈">
							<HomeIcon width={24} height={24} />
						</MenuItem>
						<MenuItem url='/' label="검색">
							<SearchIcon width={24} height={24} />
						</MenuItem>
						<MenuItem url='/' label="피드">
							<MessageIcon width={24} height={24} />
						</MenuItem>
						<MenuItem url='/' label="내 예약">
							<CalendarIcon width={24} height={24} />
						</MenuItem>
						<MenuItem url='/' label="메뉴">
							<HamburgerIcon width={24} height={24} />
						</MenuItem>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default MenuNavigation;