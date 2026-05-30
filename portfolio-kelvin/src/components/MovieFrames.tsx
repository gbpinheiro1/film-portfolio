type imageItem = {
  src: string
  alt: string
}

type MovieFramesProps = {
  images: imageItem[]
}

export function MovieFrames({ images }: MovieFramesProps) {
  return (
    <div className="flex flex-col w-full">
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`w-3/5 h-auto ${index % 2 === 0 ? "self-end" : "self-start"}`}
        />
      ))}
    </div>
  )
}
