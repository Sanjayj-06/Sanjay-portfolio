# Videos Folder

This folder contains video files for the Talks & Speeches section.

## Structure:
- `/public/videos/` - Place your video files here (e.g., talk1.mp4, talk2.mp4)
- `/public/videos/thumbnails/` - Place thumbnail images here (e.g., talk1.jpg, talk2.jpg)

## How to Add Videos:

1. **Add your video files** to the `/public/videos/` folder
   - Supported formats: .mp4, .webm, .mov
   - Recommended: MP4 format for best browser compatibility

2. **Add thumbnail images** to the `/public/videos/thumbnails/` folder
   - These are preview images shown before the video plays
   - Recommended size: 1280x720 (16:9 aspect ratio)
   - Format: .jpg or .png

3. **Update the VideoSection.jsx component**
   - Open: `src/components/VideoSection.jsx`
   - Update the `videos` array at the top of the file
   - Add your video details like this:

```javascript
{
  id: 1,
  src: "/videos/your-video-name.mp4",
  thumbnail: "/videos/thumbnails/your-thumbnail.jpg",
  title: "Your Talk Title",
  description: "Description of your talk",
  date: "Month Year",
  venue: "Event Name, Location"
}
```

## Example:
If you have a video called "ai-conference-2025.mp4" and thumbnail "ai-conference-2025.jpg":

1. Place the video at: `/public/videos/ai-conference-2025.mp4`
2. Place the thumbnail at: `/public/videos/thumbnails/ai-conference-2025.jpg`
3. Update the component:

```javascript
{
  id: 1,
  src: "/videos/ai-conference-2025.mp4",
  thumbnail: "/videos/thumbnails/ai-conference-2025.jpg",
  title: "AI Conference 2025",
  description: "Keynote on Machine Learning Trends",
  date: "March 2025",
  venue: "Tech Summit, San Francisco"
}
```

## Tips:
- Keep video files under 100MB for faster loading
- Use compressed/optimized videos for web
- Thumbnails should be high quality but optimized for web (100-300KB)
- If you don't have a thumbnail, the component will show a placeholder with a play icon
