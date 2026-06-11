import ReactPlayer from "react-player"

type VideoPlayerProps = {
  videoUrl: string
}

export function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  return (
    <div className="relative min-w-11/12 sm:min-w-4/5 lg:min-w-1/2 aspect-video">
      <ReactPlayer src={videoUrl} controls={true} width="100%" height="100%" />
    </div>
  )
}
