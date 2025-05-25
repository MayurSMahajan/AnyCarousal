import { Carousel } from "@any-carousal/react-any-carousel/carousel";
import { ChevronIcon } from "./components/ChevronIcon";
import { LargeImageComponent } from "./components/LargeImageComponent";
import { largeImageList } from "./data/largeImageList";
import { cubDataList } from "./data/cubDataList";
import { CubInfoCard } from "./components/CubInfoCard";

export default function Home() {

  return (
    <div style={{ 'padding': '2rem' }}>
      <h1 style={{ 'marginBottom': '0.5rem' }}>AnyCarousal Example</h1>
      <p style={{ 'marginBottom': '2rem' }}>To move the carousal: press the arrow buttons or slide with two fingers on your touch-pad or hold Shift key and scroll using MouseWheel.</p>
      <Carousel
        iconOptions={
          {
            icon: < ChevronIcon color="white" />,
            iconBgColor: "#00000080",
            iconColor: "white"
          }
        }
        scrollOffset={300}
        autoSlideInterval={2000}
      >
        {largeImageList.map((item, i) => (
          <LargeImageComponent key={i} imageUrl={item.imageUrl} credit={item.credit}></LargeImageComponent>
        ))}
      </Carousel>
      <hr style={{ 'margin': '5rem 0' }}></hr>
      <h1 style={{ 'marginBottom': '1rem' }}>Carousal with Cards</h1>
      <p style={{ 'marginBottom': '2rem' }}>Customise the scrollOffset property to scroll multiple items at a time</p>
      <Carousel scrollOffset={4000}>
        {cubDataList.map((cub, i) => (
          <CubInfoCard
            key={i}
            species={cub.species}
            heightAtBirth={cub.heightAtBirth}
            funFact={cub.funFact}
            weightAtBirth={cub.weightAtBirth}
            imageUrl={cub.imageUrl}>
          </CubInfoCard>
        ))}
      </Carousel>
      <hr style={{ 'margin': '5rem 0' }}></hr>
      <h1 style={{ 'marginBottom': '1rem' }}>Carousal with custom iconOptions</h1>
      <Carousel
        iconOptions={{
          icon: < ChevronIcon color="white" />,
          iconColor: "white",
          iconBgColor: "#ffffff45"
        }}
        scrollOffset={100}
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