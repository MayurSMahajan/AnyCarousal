import { Carousel } from "@any-carousal/react-any-carousel/carousal";

export default function Home() {
  return (
    <div>
      <h1>Test Carousel</h1>
      <Carousel>
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            style={{
              scrollSnapAlign: "start",
              flex: "0 0 auto",
              width: "200px",
              height: "150px",
              background: "#eee",
              margin: "0 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Slide {num}
          </div>
        ))}
      </Carousel>
    </div>
  );
}