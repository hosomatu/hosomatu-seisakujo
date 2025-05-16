import { extractYouTubeVideoId } from "../../utils/youtube_get_id";

type Props = {
    videoUrl?: string;
    title?: string;
    description?: string;
    id?: string;
  };
  
  export default function Youtube({ videoUrl = "https://www.youtube.com/watch?v=LAGf3Ikh56A", title = "title", description = "description", id = "pickup" }: Props) {
    const videoId = extractYouTubeVideoId(videoUrl);
    return (
      <section id={id} className="mt-6 py-8 px-4 text-center">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
  
        <div className="aspect-w-16 aspect-h-9 max-w-2xl mx-auto h-[400px]">
          <iframe
            className="w-full h-full rounded-lg shadow-md"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="mt-4 text-sm text-gray-500">{description}</p>
      </section>
    );
  }
  