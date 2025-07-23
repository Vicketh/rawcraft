# Rawcraft - Professional Photography & Videography Website

A modern, responsive single-page website for Rawcraft, showcasing professional photography and videography services in Nairobi, Kenya.

## 🎯 Features

- **Modern Design**: Dark theme with gold accents and smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Video Portfolio**: Interactive modal-based portfolio with video previews
- **Contact Integration**: Multiple contact methods (phone, email, social media)
- **Performance Optimized**: Fast loading with lazy loading and optimized assets
- **SEO Ready**: Meta tags and structured data for search engines

## 🚀 Quick Start

### Option 1: Direct Upload (Recommended)
1. Upload `index.html` to your web hosting service
2. Upload the `assets/` folder with all videos and images
3. Your website is live!

### Option 2: Local Development
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 3000
   
   # Using Node.js
   npx serve .
   ```

## 📁 Project Structure

```
BLACK STUDIOS/
├── index.html              # Main website file
├── assets/                 # Media assets
│   ├── videos/            # Video files
│   │   ├── cinematography.mp4
│   │   ├── Ruracio.mp4
│   │   ├── ABSA.mp4
│   │   ├── Bensoul_Stereo.mp4
│   │   ├── kevo_filming.mp4
│   │   └── Lamu_Graded.mp4
│   └── images/            # Image files
│       └── rawcraft_logo.png
├── deploy.config.js       # Deployment configuration
├── README.md             # This file
└── README.txt           # Legacy documentation
```

## 🛠 Customization Guide

### 1. Update Contact Information

In `index.html`, find the Contact section and update:

```javascript
// Phone numbers
React.createElement('a', { href: 'tel:0797534189' }, '0797534189'),
React.createElement('a', { href: 'tel:0710730261' }, '0710730261'),

// Email
React.createElement('a', { href: 'mailto:rawcraftmedia@gmail.com' }, 'rawcraftmedia@gmail.com'),
```

### 2. Update Social Media Links

Find the `socialLinks` array:

```javascript
const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/rawcraft_ke', icon: '📷' },
  { name: 'YouTube', url: 'https://youtube.com/@rawcraft', icon: '📺' },
  { name: 'Twitter', url: 'https://twitter.com/rawcraft_ke', icon: '🐦' },
  { name: 'TikTok', url: 'https://tiktok.com/@rawcraft_ke', icon: '🎵' },
];
```

### 3. Add/Replace Videos

To add a new video to the portfolio:

1. Add the video file to `assets/videos/`
2. Update the `media` array in the Portfolio component:

```javascript
{
  src: "assets/videos/your-new-video.mp4",
  title: "Your Video Title",
  type: "video",
  description: "Description of your video project.",
  quote: '"Optional inspiring quote." – Rawcraft'
},
```

### 4. Replace Background Video

Change the hero background video by updating:

```javascript
React.createElement("video", {
  src: "assets/videos/your-background-video.mp4",
  // ... other properties
}),
```

## 🌐 Deployment Options

### Netlify (Recommended)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live with automatic HTTPS!

### Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Import your project from GitHub or upload directly
3. Deploy with one click

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch and deploy

### Traditional Web Hosting
Upload all files to your web hosting service via FTP/cPanel.

## ⚡ Performance Optimization

### Video Optimization
For best performance, optimize your videos:

```bash
# Using FFmpeg to optimize videos
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k -movflags +faststart output.mp4
```

**Recommended video settings:**
- Resolution: 1920x1080 or lower
- Format: MP4 (H.264)
- Bitrate: 2-5 Mbps
- Duration: Keep portfolio videos under 30 seconds

### Using a CDN
For better global performance, upload videos to:
- **Cloudinary** (recommended for media)
- **AWS S3 + CloudFront**
- **Vercel/Netlify** (for smaller files)

Then update video paths in `index.html`:
```javascript
src: "https://your-cdn-url.com/video.mp4"
```

## 🔧 Technical Details

### Technologies Used
- **React 18** (via CDN)
- **Tailwind CSS** (via CDN)
- **Vanilla JavaScript**
- **HTML5 Video API**
- **CSS3 Animations**

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Features
- Lazy loading for videos and images
- Optimized video preloading
- Smooth CSS animations
- Mobile-first responsive design
- SEO-optimized markup

## 📱 Contact Form Setup

### Option 1: Formspree (Recommended)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the form action in `index.html`:
   ```javascript
   action: 'https://formspree.io/f/YOUR-FORM-ID',
   ```

### Option 2: Netlify Forms
1. Deploy to Netlify
2. Add `netlify` attribute to your form
3. Forms will appear in your Netlify dashboard

### Option 3: Email Fallback (Current)
The current setup opens the user's email client with pre-filled information.

## 📊 Analytics Setup

### Google Analytics 4
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Replace `YOUR-GA-ID` in `index.html` with your actual ID

## 🔒 Security Considerations

- All external links open in new tabs with `rel="noopener noreferrer"`
- Video autoplay is muted to comply with browser policies
- Form validation prevents empty submissions
- No sensitive data is stored client-side

## 🚨 Troubleshooting

### Videos Not Playing
- Check file paths are correct
- Ensure videos are in MP4 format
- Verify video files aren't corrupted
- Check browser console for errors

### Slow Loading
- Optimize video file sizes
- Use a CDN for large media files
- Enable compression on your web server
- Consider lazy loading for below-the-fold content

### Mobile Issues
- Test on actual devices, not just browser dev tools
- Ensure videos have `playsinline` attribute
- Check touch interactions work properly

## 📞 Support

For technical support or customization requests:
- **Email**: rawcraftmedia@gmail.com
- **Phone**: +254 797 534 189 (Kelvin Black)
- **Phone**: +254 710 730 261 (Francis Kiriba)

## 📄 License

© 2025 Rawcraft. All rights reserved.

---

**Built with ❤️ for Rawcraft Media**

*Real Stories. Raw Energy. Refined Craft.*