import Image from 'next/image';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, onClose }: ImageModalProps) {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
      onClick={onClose}
    >
      <div className='relative p-4 max-w-3xl w-full'>
        <button
          className='absolute top-4 right-4 text-white text-2xl'
          onClick={onClose}
        >
          ✕
        </button>
        <Image
          src={imageUrl}
          alt='Project Image'
          width={1000}
          height={600}
          className='rounded-lg shadow-lg'
        />
      </div>
    </div>
  );
}
