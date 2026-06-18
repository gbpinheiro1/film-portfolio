import { useNavigate } from "react-router-dom"

type imageItem = {
  src: string
  alt: string
  id: string
}

type MovieFramesProps = {
  images: imageItem[]
}

export function MovieFrames({ images }: MovieFramesProps) {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col w-full items-center mt-4 gap-3 md:mt-0 md:gap-0 mb-3 md:mb-0">
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`w-10/12 md:w-3/5 h-auto cursor-pointer ${index % 2 === 0 ? "md:self-end" : "md:self-start"}`}
          onClick={() => navigate(`/projects/${image.id}`)}
        />
      ))}
    </div>
  )
}
