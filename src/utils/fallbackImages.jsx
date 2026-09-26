import fallback1 from '../assets/fallbackImg/fallback1.jpg';
import fallback2 from '../assets/fallbackImg/fallback2.jpg';
import fallback3 from '../assets/fallbackImg/fallback3.jpg'
import fallback4 from '../assets/fallbackImg/fallback4.jpg'
import fallback5 from '../assets/fallbackImg/fallback5.jpg'
import fallback6 from '../assets/fallbackImg/fallback6.jpg'
 const fallbackImages=[fallback1,fallback2,fallback3,fallback4,fallback5,fallback6]
export default function getRandomFallbackImages(){
    return fallbackImages[Math.random() * fallbackImages.length];
}