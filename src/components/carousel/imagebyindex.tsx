import carousel_1 from '../../assets/carouselimages/carousel_1.jpg'
import carousel_2 from '../../assets/carouselimages/carousel_2.jpg'
import carousel_3 from '../../assets/carouselimages/carousel_3.jpg'
import carousel_4 from '../../assets/carouselimages/carousel_4.jpg'

export const images = [carousel_1, carousel_2, carousel_3, carousel_4]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex