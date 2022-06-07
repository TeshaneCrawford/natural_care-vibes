import React from 'react';
import Image from 'next/image';
import { Box } from "@chakra-ui/react"

const Hero = () => {
	const src = 'https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png';
	const loader = ({ src }: { src: string }) => {
		return src;
	};

	return (
		<Box sx={{ w: '100%', h: '100vh', p: 0, m: 0 }}>
			<Box
				sx={{
					w: '100%',
					h: '60vh',
					pos: 'relative',
					p: 0,
					m: 0,
				}}
			>
				<Image
					alt="Next.js logo"
					objectFit="cover"
					layout="fill"
					objectPosition="right top"
					loader={loader}
					src={src}
					unoptimized
				/>
			</Box>
		</Box>
	);
};

export default Hero;