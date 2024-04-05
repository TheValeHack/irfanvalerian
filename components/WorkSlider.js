// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Valegram',
          path: '/project_valegram.png',
          url: 'https://github.com/TheValeHack/valegram'
        },
        {
          title: 'Foodshare',
          path: '/project_foodshare.png',
          url: 'https://github.com/TheValeHack/foodshare'
        },
        {
          title: 'Jadkul',
          path: '/project_jadkul.png',
          url: 'https://github.com/TheValeHack/Jadkul'
        },
        {
          title: 'IMED',
          path: '/project_imed.png',
          url: 'https://irfanvalee.000webhostapp.com/projects/imed/index.html'
        },
      ],
    },
    {
      images: [
        {
          title: 'YukPeriksa',
          path: '/project_yukperiksa.png',
          url: 'https://irfanvalee.000webhostapp.com/projects/yukperiksa/index.html'
        },
        {
          title: 'Pikitup',
          path: '/project_pikitup.png',
          url: 'https://github.com/TheValeHack/pikitup'
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';
import Link from 'next/link';

const WorkSlider = () => {
  function openProject(url){
    // window.open(url);
    console.log(url)
  }

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt='' className='max-h-[200px]' />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <Link href={image.url} target='_blank'>
                            <div className='delay-100'>SEE</div>
                          </Link>
                          {/* title part 2 */}
                          <Link href={image.url} target='_blank'>
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                              PROJECT
                            </div>
                          </Link>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <Link href={image.url} target='_blank'>
                              <BsArrowRight/>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
