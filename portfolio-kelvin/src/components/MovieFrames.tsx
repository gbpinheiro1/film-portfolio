type imageItem = {
  src: string
  alt: string
}

type MovieFramesProps = {
  images: imageItem[]
}

export function MovieFrames({ images }: MovieFramesProps) {
  return (
    <div className="flex flex-col">
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={index % 2 === 0 ? "self-start" : "self-end"}
        />
      ))}
    </div>
  )
}
