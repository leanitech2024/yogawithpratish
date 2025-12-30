import InteractiveBentoGallery from './ui/interactive-bento-gallery';
import { yogaMediaItems } from '../database/gallerimages';

const Gallery = () => {
  return (
    <div className="bg-[#FCFAFB] min-h-screen">
      <InteractiveBentoGallery
        mediaItems={yogaMediaItems}
        title="My Gallery"
        description="Explore our journey through yoga, meditation, and mindful living."
      />
    </div>
  );
};

export default Gallery;