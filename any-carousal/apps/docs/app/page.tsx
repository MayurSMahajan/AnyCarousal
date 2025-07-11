import { Carousel } from "@any-carousal/react-any-carousel/carousel";
import { ChevronIcon } from "./components/ChevronIcon";
import { LargeImageComponent } from "./components/LargeImageComponent";
import { largeImageList } from "./data/largeImageList";
import { cubDataList } from "./data/cubDataList";
import { FaArrowLeft } from "react-icons/fa6";
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
            iconStyles: {
              "backgroundColor": "black",
              "color": "white",
            }
          }
        }
        scrollOffset={1000}
        autoSlideInterval={2000}
      >
        {largeImageList.map((item, i) => (
          <LargeImageComponent key={i} imageUrl={item.imageUrl} credit={item.credit}></LargeImageComponent>
        ))}
      </Carousel>
      <hr style={{ 'margin': '5rem 0' }}></hr>
      <h1 style={{ 'marginBottom': '1rem' }}>Carousal with Cards & Customised Nav Icons</h1>
      <p style={{ 'marginBottom': '0.5rem' }}>Customise the scrollOffset property to scroll multiple items at a time, here `scrollOffset=4000`</p>
      <p style={{ 'marginBottom': '0.5rem' }}>The iconOptions parameter accpets an instance of `HTMLElement` thus you can pass anything as `iconOptions.icon`, you can directly pass styles to `iconOptions.iconStyles` parameter</p>
      <p style={{ 'marginBottom': '2rem' }}>In this example, we have not set the `autoSlideInterval` thus it is not scrolling automatically</p>
      <Carousel scrollOffset={4000} iconOptions={{
        icon: <FaArrowLeft style={{ scale: 0.8 }} />,
        iconStyles: {
          "backgroundColor": "#ffffff85",
          "color": "black",
          "scale": "0.8"
        },
      }}>
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
          iconStyles: {
            "backgroundColor": "#ffffff45",
            "color": "white",
          },
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
      <div style={{ 'marginBottom': '5rem' }}></div>
    </div>
  );
}