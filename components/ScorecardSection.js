import { Box, MediaQuery, Paper, Text } from "@mantine/core"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ScorecardSection = () => {

    const wrapper = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
    }

    const test = ['Total Return', 'Unrealized Return', 'Amount Invested']


    return (
        <>
            <MediaQuery smallerThan='sm' styles={{display: 'none'}}>
                <Box sx={wrapper}>
                    {
                        test.map( (item, idx) => (
                            <Paper
                                key={idx}
                                shadow='sm'
                                radius='md'
                                withBorder
                                padding='md'
                                sx={{
                                    minHeight: '125px'
                                }}
                            >
                                <Text>{item}</Text>
                            </Paper>
                        ))
                    }
                </Box>
            </MediaQuery>
            <MediaQuery largerThan='sm' styles={{display: 'none'}}>
                <Box sx={(theme) => ({'& .swiper': { padding: '0 .25rem 3rem'}})}>
                    <Swiper
                    // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        loop={true}
                    >
                        {
                            test.map((item, idx) => (
                                <SwiperSlide
                                    key={idx}
                                >
                                    <Paper
                                        shadow='sm'
                                        radius='md'
                                        withBorder
                                        padding='md'
                                        sx={{
                                            minHeight: '250px'
                                        }}
                                    >
                                        {item}
                                    </Paper>
                                    </SwiperSlide>
                            ))
                        }
                        </Swiper>
                </Box>
            </MediaQuery>

    </>
  )
}

export default ScorecardSection