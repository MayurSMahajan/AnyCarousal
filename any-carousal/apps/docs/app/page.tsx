import { Carousel } from "@any-carousal/react-any-carousel/carousel";

export default function Home() {
  return (
    <div>
      <h1>Test Carousel</h1>
      <Carousel>
       {[...Array(10)].map((_, i) => (
        <div
          key={i}
          style={{
            height: 150,
            width: 150,
            background: '#ddd',
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