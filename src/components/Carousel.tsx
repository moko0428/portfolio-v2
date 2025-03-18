import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: true, // 하단 점 네비게이션
    infinite: true, // 무한 루프
    speed: 1000, // 전환 속도 (밀리초)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 넘길 슬라이드 수
    autoplay: true, // 자동 재생 활성화
    autoplaySpeed: 5000, // 자동 재생 간격 (3초)
    pauseOnHover: true, // 호버 시 자동 재생 일시 정지
  };
  if (!mounted) return null;

  return (
    <div className="w-full h-full max-w-xl mx-auto">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
