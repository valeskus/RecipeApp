import './ImagesGallery.style.css';

import { Loader } from '../../../common/Loader';

import { useImagesGalleryController } from './useImagesGalleryController';

export function ImagesGallery(): JSX.Element {
  const { images, isLoading, onCopyUrl } = useImagesGalleryController();

  return (
    <div className="imagesGallery-container">
      {isLoading &&
        <div className="loader-wrapper"> <Loader isInBox={true}/></div>}
      {!isLoading && images && images.map((image, index) => {
        return <img className="imagesGallery-image" src={image.url} key={index} onClick={() => onCopyUrl(image.url)}/>;
      })}
    </div>
  );
}
