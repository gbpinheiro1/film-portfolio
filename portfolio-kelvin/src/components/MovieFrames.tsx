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
    <div className="flex flex-col w-full">
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`w-3/5 h-auto cursor-pointer ${index % 2 === 0 ? "self-end" : "self-start"}`}
          onClick={() => navigate(`/projects/${image.id}`)}
        />
      ))}
    </div>
  )
}
