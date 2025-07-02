import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ImageCarousel = ({ 
  images = [], 
  aspectRatio = "4/3",
  showCaptions = true,
  showDots = true,
  showCounter = true,
  showInstructions = false,
  className = "",
  onImageChange = null
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  // Fallback images if none provided
  const defaultImages = [
    {
      src: '/api/placeholder/800/600',
      alt: 'Placeholder image',
      caption: 'Default placeholder image'
    }
  ];

  const carouselImages = images.length > 0 ? images : defaultImages;

  const handleImageClick = (event) => {
    if (isTransitioning || carouselImages.length <= 1) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const containerWidth = rect.width;
    const clickPosition = clickX / containerWidth;
    
    setIsTransitioning(true);
    
    let newIndex;
    if (clickPosition < 0.5) {
      // Clicked on left half - go to previous image
      newIndex = currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1;
    } else {
      // Clicked on right half - go to next image
      newIndex = currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setCurrentIndex(newIndex);
    
    // Callback for parent component
    if (onImageChange) {
      onImageChange(newIndex, carouselImages[newIndex]);
    }
    
    // Reset transition state after animation
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    // Callback for parent component
    if (onImageChange) {
      onImageChange(index, carouselImages[index]);
    }
    
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Get aspect ratio class
  const getAspectRatioClass = () => {
    const ratioMap = {
      "1/1": "aspect-square",
      "4/3": "aspect-[4/3]",
      "3/2": "aspect-[3/2]",
      "16/9": "aspect-video",
      "21/9": "aspect-[21/9]"
    };
    return ratioMap[aspectRatio] || "aspect-[4/3]";
  };

  return (
    <div className={`w-full max-w-4xl mx-auto space-y-6 ${className}`}>
      {/* Main Carousel */}
      <Card className="border border-gray-300 bg-white overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            {/* Image Container */}
            <div 
              ref={containerRef}
              className={`relative ${getAspectRatioClass()} bg-gray-100 overflow-hidden`}
              onClick={handleImageClick}
            >
              {/* Current Image */}
              <div className="absolute inset-0">
                <img
                  src={carouselImages[currentIndex].src}
                  alt={carouselImages[currentIndex].alt}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    isTransitioning ? 'opacity-90' : 'opacity-100'
                  }`}
                />
                
                {/* Subtle click indicators - only show if multiple images */}
                {carouselImages.length > 1 && (
                  <div className="absolute inset-0 flex">
                    {/* Left click area */}
                    <div className="flex-1 bg-gradient-to-r from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-start pl-8">
                      <div className="w-8 h-8 border-l-2 border-t-2 border-white/80 transform -rotate-45"></div>
                    </div>
                    {/* Right click area */}
                    <div className="flex-1 bg-gradient-to-l from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-end pr-8">
                      <div className="w-8 h-8 border-r-2 border-t-2 border-white/80 transform rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Caption */}
            {showCaptions && carouselImages[currentIndex].caption && (
              <div className="p-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 font-sans">
                  {carouselImages[currentIndex].caption}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Dot Navigation - only show if multiple images */}
      {showDots && carouselImages.length > 1 && (
        <div className="flex justify-center space-x-3">
          {carouselImages.map((_, index) => (
            <button
                type="button"
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gray-900 scale-125'
                  : 'bg-gray-300 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter - only show if multiple images */}
      {showCounter && carouselImages.length > 1 && (
        <div className="text-center">
          <span className="text-xs font-sans uppercase tracking-widest text-gray-500">
            {String(currentIndex + 1).padStart(2, '0')} / {String(carouselImages.length).padStart(2, '0')}
          </span>
        </div>
      )}

      {/* Usage Instructions */}
      {showInstructions && carouselImages.length > 1 && (
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 font-sans">
            Click on the left or right side of the image to navigate
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;