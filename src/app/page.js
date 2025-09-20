import HeroSection from '@/components/home/HeroSection'
import SearchForm from '@/components/home/SearchForm'
import FeaturedPackages from '@/components/home/FeaturedPackages'
import FeaturedHotels from '@/components/home/FeaturedHotels'
import Testimonials from '@/components/home/Testimonials'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SearchForm />
      <FeaturedPackages />
      <FeaturedHotels />
      <Testimonials />
    </div>
  )
}