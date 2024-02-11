
const UploadedImage = ({ images, index }) => {
    return (
        <div className='flex items-center z-20 justify-center h-[6rem]'>
            <img
                alt={`Uploaded image ${index + 1}`}
                className='object-cover aspect-auto'
                src={`${images[index]}`}
                loading="lazy"
                height="auto"
                width="auto"
            />
        </div>
    );
};

export default UploadedImage;
