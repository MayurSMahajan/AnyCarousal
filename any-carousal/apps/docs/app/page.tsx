import { Carousel } from "@any-carousal/react-any-carousel/carousel";
import { ChevronIcon } from "./components/ChevronIcon";

export default function Home() {
  const largeImageList = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1633530539453-087e5e3bf3d5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      credit: 'Photo by <a href="https://unsplash.com/@themysterycat?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mystery Cat</a> on <a href="https://unsplash.com/photos/three-young-tiger-cubs-are-laying-down-together-MjUdFS49Ox0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1745933229147-68202b50274b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      credit: 'Photo by <a href="https://unsplash.com/@matthewryanstephenson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Matthew Stephenson</a> on <a href="https://unsplash.com/photos/a-lion-cub-looks-at-the-camera-in-the-forest-agIcrXMHeQA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1622299701852-0da4867ead77?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      credit: 'Photo by <a href="https://unsplash.com/@ahmadgalal?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ahmed Galal</a> on <a href="https://unsplash.com/photos/leopard-on-tree-branch-during-daytime-fknfO_N4LxA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1705910868328-456fa64f36fc?q=80&w=2958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      credit: 'Photo by <a href="https://unsplash.com/@gurthb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gurth Bramall</a> on <a href="https://unsplash.com/photos/a-group-of-cheetah-sitting-on-top-of-a-lush-green-field-VpchniBMiEY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    },
  ]

  return (
    <div style={{ 'padding': '2rem' }}>
      <h1 style={{ 'marginBottom': '0.5rem' }}>Carousal with Large Custom Items</h1>
      <p style={{ 'marginBottom': '2rem' }}>With Large Items, you can really see content snapping in action</p>
      <Carousel 
        icon={<ChevronIcon color="white" />}
        iconColor="white"
        iconBgColor="#00000080"
        scrollOffset={300}
      >
        {largeImageList.map((item, i) => (
          <div
            key={i}
            style={{
              width: 'clamp(280px, 80vw, 1150px)',
              aspectRatio: '16/9',
              background: '#444',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <img style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }} src={item.imageUrl} alt="large-image" />
            <p
              style={{
                position: 'absolute',
                bottom: '5%',
                background: 'rgba(0,0,0,0.6)',
                color: 'white',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
              }}
              dangerouslySetInnerHTML={{ __html: item.credit }}
            ></p>
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