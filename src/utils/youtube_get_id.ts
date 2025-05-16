/**
 * YouTubeのURLから動画IDを抽出する
 * 対応形式:
 * - https://www.youtube.com/watch?v=XXXXXXXXXXX
 * - https://youtu.be/XXXXXXXXXXX
 */
export function extractYouTubeVideoId(url: string): string | null {
    try {
      const parsedUrl = new URL(url);
  
      if (parsedUrl.hostname.includes("youtu.be")) {
        return parsedUrl.pathname.slice(1); // /XXXX → XXXX
      }
      
      if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.pathname === "/watch") {
        return parsedUrl.searchParams.get("v");
      }
  
      return null;
    } catch {
      return null;
    }
  }
  