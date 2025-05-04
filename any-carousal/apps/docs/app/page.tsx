import { Carousel } from "@any-carousal/react-any-carousel/carousel";
import { ChevronIcon } from "./components/ChevronIcon";

export default function Home() {
  return (
    <div style={{ 'padding' : '2rem'}}>
      <h1 style={{ 'marginBottom': '0.5rem' }}>Carousal with Large Custom Items</h1>
      <p style={{ 'marginBottom': '1rem' }}>With Large Items, you can really see content snapping in action</p>
      <Carousel>
       {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            height: 600,
            width: 800,
            background: '#444',
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {i + 1}
        </div>
      ))}
      </Carousel>
      <hr style={{ 'margin': '5rem 0' }}></hr>
      <h1 style={{ 'marginBottom': '1rem' }}>Carousal with Small Custom Items</h1>
      <Carousel>
       {[...Array(10)].map((_, i) => (
        <div
          key={i}
          style={{
            height: 150,
            width: 150,
            background: '#444',
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {i + 1}
        </div>
      ))}
      </Carousel>
      <hr style={{ 'margin': '5rem 0' }}></hr>
      <h1 style={{ 'marginBottom': '1rem' }}>Carousal with Light custom icon, iconColor, iconBGColor</h1>
      <Carousel
        icon={<ChevronIcon color="white" />}
        iconColor="white"
        iconBgColor="#ffffff45"
      >
       {[...Array(4)].map((_, i) => (
        <div
          key={i}
          style={{
            height: 300,
            width: 500,
            background: '#555',
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {i + 1}
        </div>
      ))}
      </Carousel>
    </div>
  );
}