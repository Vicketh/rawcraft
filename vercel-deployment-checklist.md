# Vercel Deployment Checklist for www.rawcraft.net
## Step-by-Step Action Plan

### 🎯 **Pre-Deployment Setup**

#### **✅ Repository Status Check**
- [x] All changes pushed to GitHub (including Git LFS videos)
- [x] Ruracio.mp4 (114MB) successfully tracked with Git LFS
- [x] Deploy folder contains all website files
- [x] Gold color updates applied and committed
- [x] vercel.json configuration file ready

#### **📝 Account Requirements**
- [ ] GitHub account accessible (Vicketh)
- [ ] Domain registrar account ready for www.rawcraft.net
- [ ] Email access for verification steps

---

### 🚀 **Step 1: Create Vercel Account (5 minutes)**

#### **Actions:**
1. [ ] Go to https://vercel.com
2. [ ] Click "Sign up"
3. [ ] Select "Continue with GitHub"
4. [ ] Authorize Vercel to access your repositories
5. [ ] Skip team setup (can add later)

#### **Verification:**
- [ ] Vercel dashboard loads successfully
- [ ] GitHub integration confirmed
- [ ] Repository list visible

---

### 📁 **Step 2: Import Repository (3 minutes)**

#### **Actions:**
1. [ ] Click "New Project" on Vercel dashboard
2. [ ] Select "Import Git Repository"
3. [ ] Choose "GitHub" as source
4. [ ] Find and select `Vicketh/black-studios`
5. [ ] Configure project settings:
   - **Project Name**: `rawcraft-website`
   - **Framework**: `Other`
   - **Root Directory**: `./deploy`
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty

#### **Advanced Configuration:**
6. [ ] Upload/commit the vercel.json file to root directory
7. [ ] Ensure deploy folder structure is correct
8. [ ] Click "Deploy"

#### **Verification:**
- [ ] Build process starts automatically
- [ ] No build errors in logs
- [ ] Deployment completes successfully
- [ ] Temporary Vercel URL generated (save this)

---

### 🌐 **Step 3: Domain Purchase & Setup (30 minutes)**

#### **Purchase Domain:**
1. [ ] Choose registrar (Namecheap recommended)
2. [ ] Search for `rawcraft.net`
3. [ ] Purchase domain (typically $10-15/year)
4. [ ] Complete registration process
5. [ ] Access domain management panel

#### **Add Domain to Vercel:**
1. [ ] Go to Project Settings → Domains
2. [ ] Click "Add Domain"
3. [ ] Enter `rawcraft.net`
4. [ ] Click "Add"
5. [ ] Add `www.rawcraft.net` as well
6. [ ] Set `www.rawcraft.net` as primary domain
7. [ ] Copy DNS settings shown by Vercel

#### **Configure DNS at Registrar:**
8. [ ] Log into domain registrar
9. [ ] Find DNS management section
10. [ ] Add these records:
    ```
    Type: A     Name: @     Value: 76.76.19.61
    Type: CNAME Name: www   Value: cname.vercel-dns.com
    ```
11. [ ] Save DNS changes
12. [ ] Wait for propagation (24-48 hours)

#### **Verification:**
- [ ] Domain added successfully in Vercel
- [ ] DNS records configured at registrar
- [ ] SSL certificate status shows "Pending" or "Active"

---

### 🎬 **Step 4: Video & Feature Testing (15 minutes)**

#### **Core Functionality Test:**
1. [ ] Visit your temporary Vercel URL
2. [ ] Homepage loads completely
3. [ ] Logo animations work (hover/shine effect)
4. [ ] Navigation menu functions
5. [ ] Services section displays correctly
6. [ ] Gear section shows equipment properly

#### **Video Portfolio Testing:**
1. [ ] Click on portfolio videos
2. [ ] Video modals open correctly
3. [ ] **CRITICAL**: Test Ruracio.mp4 (114MB) loads and plays
4. [ ] All other videos play without issues
5. [ ] Video controls work (play/pause/seek)
6. [ ] Modal close buttons function

#### **Interactive Features:**
1. [ ] Video comments system works
2. [ ] Like/heart buttons respond
3. [ ] Star rating system functions
4. [ ] Modal overlays display properly
5. [ ] Mobile responsive design verified

#### **Performance Check:**
1. [ ] Page loads in under 3 seconds
2. [ ] Videos start streaming quickly
3. [ ] No console errors in browser dev tools
4. [ ] Mobile version works on phone/tablet

---

### 📱 **Step 5: Mobile & Cross-Browser Testing (10 minutes)**

#### **Device Testing:**
- [ ] **Desktop**: Chrome, Firefox, Safari, Edge
- [ ] **Mobile**: iOS Safari, Android Chrome
- [ ] **Tablet**: iPad, Android tablet

#### **Key Features on Mobile:**
- [ ] Touch navigation works
- [ ] Videos play on mobile devices
- [ ] Modal touch controls function
- [ ] Responsive layout adapts correctly
- [ ] Logo and text scale appropriately

---

### 🔍 **Step 6: SEO & Performance Verification (10 minutes)**

#### **SEO Elements:**
1. [ ] Page title displays: "Rawcraft - Professional Videography"
2. [ ] Meta descriptions are present
3. [ ] robots.txt accessible at /robots.txt
4. [ ] sitemap.xml accessible at /sitemap.xml
5. [ ] Social media meta tags present

#### **Performance Testing:**
1. [ ] Test at https://pagespeed.web.dev
2. [ ] Aim for 80+ performance score
3. [ ] Check mobile usability score
4. [ ] Verify HTTPS certificate active

---

### 🎯 **Step 7: Domain Propagation & Final Testing (24-48 hours)**

#### **Monitor Propagation:**
1. [ ] Check https://dnschecker.org
2. [ ] Enter www.rawcraft.net
3. [ ] Verify worldwide propagation
4. [ ] Test different geographic locations

#### **Final Verification:**
1. [ ] www.rawcraft.net loads your website
2. [ ] rawcraft.net redirects to www.rawcraft.net
3. [ ] HTTPS works automatically (green lock icon)
4. [ ] All features work on live domain
5. [ ] **CRITICAL**: Ruracio.mp4 plays on live site

---

### 📈 **Step 8: Post-Launch Actions**

#### **Analytics & Monitoring:**
- [ ] Set up Vercel Analytics (optional)
- [ ] Add Google Analytics tracking code
- [ ] Monitor video engagement metrics
- [ ] Check performance weekly

#### **Business Updates:**
- [ ] Update social media profiles with new URL
- [ ] Update business cards/marketing materials
- [ ] Notify clients of new website address
- [ ] Submit sitemap to Google Search Console

#### **Content Maintenance:**
- [ ] Plan regular content updates
- [ ] Monitor video loading performance
- [ ] Keep portfolio current with new work
- [ ] Regular backup verification

---

### 🚨 **Troubleshooting Guide**

#### **Common Issues:**

**"Domain not working":**
- Wait 24-48 hours for DNS propagation
- Check DNS settings at registrar
- Verify Vercel domain configuration

**"Videos not loading":**
- Check Git LFS status in repository
- Verify vercel.json configuration
- Test direct video URLs

**"Build failing":**
- Check GitHub repository access
- Verify deploy folder structure
- Review Vercel build logs

**"Mobile issues":**
- Clear browser cache
- Test on different mobile browsers
- Check responsive CSS rules

---

### ✅ **Success Metrics**

#### **Launch Complete When:**
- [ ] www.rawcraft.net loads perfectly
- [ ] All 6 videos play including 114MB Ruracio.mp4
- [ ] Interactive features work (comments, likes, stars)
- [ ] Mobile experience is excellent
- [ ] Page load time under 3 seconds
- [ ] HTTPS security active
- [ ] Professional presentation achieved

#### **Business Ready:**
- [ ] Complete video portfolio accessible
- [ ] Professional domain active
- [ ] All interactive features functional
- [ ] Mobile-optimized experience
- [ ] SEO elements in place
- [ ] Analytics tracking active

---

### 🎉 **Expected Timeline**

- **Day 1**: Vercel setup, domain purchase, initial deploy
- **Day 2-3**: DNS propagation, testing, refinements  
- **Day 3+**: Live at www.rawcraft.net with full functionality

---

**🚀 Your Rawcraft website will be professionally hosted with all videos (including the 114MB Ruracio.mp4) working perfectly at www.rawcraft.net!**

*Ready to showcase "Real Stories. Raw Energy. Refined Craft." to the world.*