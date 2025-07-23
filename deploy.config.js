// Rawcraft Deployment Configuration
// This file contains settings for optimizing and deploying the Rawcraft website

const deployConfig = {
  // Site Information
  site: {
    name: "Rawcraft",
    url: "https://rawcraft.studio", // Update with your actual domain
    description: "Real Stories. Raw Energy. Refined Craft.",
    author: "Rawcraft Media",
    keywords: ["photography", "videography", "cinematography", "event coverage", "Nairobi", "Kenya"]
  },

  // Google Analytics Configuration
  analytics: {
    // Replace with your actual Google Analytics tracking ID
    gaId: "G-XXXXXXXXXX", // Update this with your GA4 measurement ID
    enabled: true
  },

  // Contact Form Configuration
  contact: {
    // Formspree configuration (recommended)
    formspree: {
      formId: "your-form-id-here", // Get this from formspree.io
      endpoint: "https://formspree.io/f/your-form-id-here"
    },

    // Netlify Forms (alternative)
    netlify: {
      enabled: false,
      endpoint: "/.netlify/functions/send-email"
    },

    // Email fallback (current implementation)
    mailto: {
      primary: "rawcraftmedia@gmail.com",
      subject: "rawcraft Contact Form"
    },

    // Phone numbers
    phones: {
      kelvin: "0797534189",
      francis: "0710730261"
    }
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com/rawcraft_ke", // Update with actual handle
    youtube: "https://youtube.com/@rawcraft", // Update with actual channel
    twitter: "https://twitter.com/rawcraft_ke", // Update with actual handle
    tiktok: "https://tiktok.com/@rawcraft_ke", // Update with actual handle
    whatsapp: "https://wa.me/254797534189" // WhatsApp link for Kelvin
  },

  // Video Optimization Settings
  media: {
    // Recommended video settings for web
    video: {
      maxWidth: 1920,
      maxHeight: 1080,
      format: "mp4",
      codec: "h264",
      bitrate: "2M", // 2 Mbps for good quality/size balance
      compression: "medium"
    },

    // Image optimization
    images: {
      formats: ["webp", "jpg"],
      maxWidth: 1920,
      quality: 85,
      lazy: true
    },

    // CDN recommendations
    cdn: {
      recommended: ["Cloudinary", "AWS S3 + CloudFront", "Vercel"],
      currentStorage: "local", // Change to "cdn" when using external storage
      cacheDuration: "1y" // 1 year cache for media files
    }
  },

  // Performance Optimization
  performance: {
    // Preload critical resources
    preload: [
      "assets/videos/cinematography.mp4",
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Dancing+Script:wght@700&display=swap"
    ],

    // Lazy loading settings
    lazyLoad: {
      images: true,
      videos: true,
      threshold: "200px" // Start loading when 200px from viewport
    },

    // Compression
    compression: {
      html: true,
      css: true,
      js: true,
      images: true
    }
  },

  // SEO Configuration
  seo: {
    title: "Rawcraft - Professional Photography & Videography in Nairobi",
    description: "Professional photography and videography services in Nairobi, Kenya. Specializing in events, corporate videos, weddings, and cinematic storytelling.",

    // Open Graph tags for social sharing
    ogImage: "assets/images/rawcraft-og-image.jpg", // Create this image (1200x630px)
    ogType: "website",

    // Structured data for search engines
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Rawcraft",
      "description": "Professional photography and videography services",
      "url": "https://rawcraft.studio",
      "telephone": "+254797534189",
      "email": "rawcraftmedia@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "Kenya"
      },
      "sameAs": [
        "https://instagram.com/rawcraft_ke",
        "https://youtube.com/@rawcraft"
      ]
    }
  },

  // Deployment Platforms
  deployment: {
    // Recommended platforms (free tiers available)
    platforms: ["Netlify", "Vercel", "GitHub Pages"],

    // Build settings
    build: {
      command: "npm run build", // Not needed for current setup
      directory: ".", // Root directory
      runtime: "static" // Static site, no server-side processing
    },

    // Environment variables (for production)
    env: {
      NODE_ENV: "production",
      SITE_URL: "https://rawcraft.studio"
    }
  },

  // Security Headers (for production)
  security: {
    headers: {
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
    },

    // Content Security Policy
    csp: {
      enabled: false, // Set to true when ready to implement
      directives: {
        "default-src": "'self'",
        "script-src": "'self' 'unsafe-inline' https://cdn.tailwindcss.com https://unpkg.com https://www.googletagmanager.com",
        "style-src": "'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src": "'self' https://fonts.gstatic.com",
        "img-src": "'self' data: https:",
        "media-src": "'self' https:"
      }
    }
  },

  // Development Settings
  development: {
    // Local server settings
    server: {
      port: 3000,
      host: "localhost"
    },

    // Hot reload (not applicable for current setup)
    hotReload: false,

    // Debug mode
    debug: false
  },

  // Backup and Version Control
  backup: {
    // Important files to always backup
    critical: [
      "index.html",
      "assets/",
      "README.txt",
      "deploy.config.js"
    ],

    // Git settings
    git: {
      repository: "https://github.com/yourusername/rawcraft-website", // Update with actual repo
      branch: "main",
      autoCommit: false
    }
  }
};

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = deployConfig;
}

// Global variable for browser environments
if (typeof window !== 'undefined') {
  window.deployConfig = deployConfig;
}
