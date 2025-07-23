# www.rawcraft.net Hosting Guide
## Professional Website Deployment Options

### 🎯 **Your Website Requirements**

Your Rawcraft website includes advanced features that require proper web hosting:
- **React components** and JavaScript functionality
- **Interactive video modals** with comments and likes
- **Professional animations** (logo shine, hover effects)
- **Dynamic content loading** and user interactions
- **Modern web standards** (HTTPS, proper MIME types)

**❌ Google Drive hosting will NOT work** for these features.

---

## 🚀 **Recommended Hosting Solutions**

### 1. **Netlify (Best Choice)**
**Perfect for your website - Free with custom domain support**

#### Setup Steps:
1. **Visit**: https://netlify.com
2. **Sign up** with your GitHub account (Vicketh)
3. **Deploy Options**:
   - **Drag & Drop**: Upload your `/deploy` folder
   - **GitHub Integration**: Connect your black-studios repository
4. **Custom Domain**: Add `www.rawcraft.net` in site settings
5. **SSL**: Automatically provided (HTTPS)

#### Deployment Process:
```bash
# Option A: Drag and Drop
1. Compress your /deploy folder to .zip
2. Drag to Netlify dashboard
3. Site goes live instantly

# Option B: GitHub Integration
1. Connect GitHub repo: Vicketh/black-studios
2. Set build directory: /deploy
3. Auto-deploy on every git push
```

#### Domain Configuration:
```
Domain Settings in Netlify:
- Primary domain: rawcraft.net
- Redirect: www.rawcraft.net → rawcraft.net
- SSL: Let's Encrypt (auto-generated)
- CDN: Global edge network included
```

---

### 2. **Vercel (Alternative)**
**Great for React/JavaScript websites**

#### Setup:
1. **Visit**: https://vercel.com
2. **Import** your GitHub repository
3. **Deploy** automatically
4. **Add domain** in project settings

#### Configuration:
```json
// vercel.json (if needed)
{
  "builds": [
    {
      "src": "deploy/index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/deploy/$1"
    }
  ]
}
```

---

### 3. **GitHub Pages**
**Free hosting with your existing repository**

#### Setup:
1. **Go to**: GitHub → Vicketh/black-studios → Settings
2. **Pages section**: Enable GitHub Pages
3. **Source**: Deploy from branch → main
4. **Folder**: /deploy
5. **Custom domain**: Add www.rawcraft.net

#### Domain Setup:
```
DNS Configuration (at your domain registrar):
CNAME www rawcraft.net
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
```

---

## 🌐 **Domain Configuration**

### Purchase Domain: www.rawcraft.net
**Recommended Registrars:**
- **Namecheap**: Affordable with privacy protection
- **Google Domains**: Easy integration
- **Cloudflare**: Advanced DNS features

### DNS Settings:
```
For Netlify:
CNAME www your-site-name.netlify.app
A @ 75.2.60.5

For Vercel:
CNAME www cname.vercel-dns.com
A @ 76.76.19.61

For GitHub Pages:
CNAME www vicketh.github.io
A @ 185.199.108.153
```

---

## 📁 **File Structure for Deployment**

### Your `/deploy` folder contains:
```
deploy/
├── index.html          # Main website file
├── assets/
│   ├── images/         # Logo and images
│   └── videos/         # Portfolio videos
├── .htaccess          # Performance optimization
├── robots.txt         # SEO directives
└── sitemap.xml        # Search engine sitemap
```

### Pre-deployment Checklist:
- ✅ All video files under 100MB
- ✅ Images optimized for web
- ✅ Links are relative (not absolute paths)
- ✅ Contact form configured (if using)
- ✅ Analytics tracking ID updated

---

## 🔧 **Quick Deployment Steps**

### **Netlify (5 minutes)**
1. **Compress** your `/deploy` folder → `rawcraft-website.zip`
2. **Drag** zip file to https://app.netlify.com/drop
3. **Copy** the generated URL (e.g., `amazing-site-123.netlify.app`)
4. **Test** all features work correctly
5. **Add custom domain** in site settings
6. **Configure DNS** at your domain registrar

### **Vercel (3 minutes)**
1. **Connect** GitHub repository at https://vercel.com
2. **Import** Vicketh/black-studios
3. **Set root directory** to `/deploy`
4. **Deploy** automatically
5. **Add domain** in project settings

---

## 🎨 **Features That Will Work Perfectly**

### ✅ **Fully Functional:**
- Interactive video modals with comments/likes
- Logo shine animation and hover effects
- Professional gear showcase section
- Mobile-responsive design
- Fast loading with CDN
- SEO optimization
- Contact form (with form service)

### 📊 **Performance Benefits:**
- **Global CDN**: Fast loading worldwide
- **HTTPS**: Secure connection
- **Compression**: Optimized file delivery
- **Caching**: Improved load times
- **Mobile optimization**: Perfect mobile experience

---

## 📞 **Support Resources**

### **Netlify Documentation:**
- Getting Started: https://docs.netlify.com
- Custom Domains: https://docs.netlify.com/domains-https/
- Form Handling: https://docs.netlify.com/forms/

### **Domain Help:**
- DNS Configuration guides
- SSL certificate setup
- Subdomain configuration

### **Troubleshooting:**
- Check DNS propagation: https://dnschecker.org
- Test website speed: https://pagespeed.web.dev
- Validate HTML: https://validator.w3.org

---

## 🎯 **Deployment Timeline**

### **Phase 1: Immediate (Today)**
- Choose hosting platform (Netlify recommended)
- Deploy website using drag-and-drop
- Test all functionality on temporary URL

### **Phase 2: Domain Setup (1-2 days)**
- Purchase www.rawcraft.net domain
- Configure DNS settings
- Add custom domain to hosting platform
- Wait for DNS propagation (24-48 hours)

### **Phase 3: Optimization (Ongoing)**
- Monitor website performance
- Update content as needed
- Track analytics and user engagement

---

## 🌟 **Why This Approach Works**

### **Professional Results:**
- ✅ **Fast loading**: Sub-2 second load times
- ✅ **Reliable**: 99.9% uptime guarantee
- ✅ **Secure**: HTTPS encryption included
- ✅ **Scalable**: Handles traffic spikes
- ✅ **SEO-friendly**: Search engine optimized

### **Business Benefits:**
- **Professional credibility** with custom domain
- **Global accessibility** with CDN
- **Mobile-first design** for all devices
- **Interactive features** to engage clients
- **Easy maintenance** and updates

---

**Your Rawcraft website deserves professional hosting that showcases your work properly. Google Drive simply can't provide the functionality your advanced website requires.**

**🚀 Ready to go live with www.rawcraft.net in under 10 minutes!**

---

*"Real Stories. Raw Energy. Refined Craft." - Now with professional web hosting.*