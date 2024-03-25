const UploadedImage = ({ index, imageUrl }) => {
  return (
    <div className="flex items-center z-20 justify-center max-h-[6rem]">
      <img
        alt={`Uploaded image ${index + 1}`}
        className="object-cover aspect-auto"
        src={imageUrl}
        loading="lazy"
        height="auto"
        width="auto"
      />
    </div>
  );
};

export default UploadedImage;
