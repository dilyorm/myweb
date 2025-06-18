# Personal Portfolio Website

A modern, interactive personal website with GitHub-style design, 3D effects, and smooth animations.

## Features

- 🎨 **GitHub-style Dark Theme** - Clean, professional design with green accents
- ✨ **3D Shapes & Animations** - Floating geometric shapes with parallax effects
- 🚀 **Interactive Elements** - Hover effects, tilt animations, and smooth transitions
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎯 **Smooth Scrolling** - Seamless navigation between sections
- 💫 **Particle System** - Dynamic background particles
- 📊 **Animated Skill Bars** - Visual representation of your skills
- 📧 **Contact Form** - Ready-to-use contact form with notifications
- 🎭 **Typing Animation** - Code typing effect in the hero section

## Sections

1. **Hero Section** - Introduction with animated code window
2. **About Section** - Personal information with statistics
3. **Projects Section** - Showcase your work with interactive cards
4. **Skills Section** - Animated skill bars and technologies
5. **Contact Section** - Contact form and information

## Customization Guide

### 1. Personal Information

Edit the following in `index.html`:

```html
<!-- Replace "Your Name" with your actual name -->
<span>Your Name</span>

<!-- Update the hero section -->
<h1 class="hero-title">
    <span class="gradient-text">Hello, I'm</span>
    <span class="name">Your Name</span>
</h1>
<p class="hero-subtitle">Full-Stack Developer & Creative Problem Solver</p>
```

### 2. About Section

Update your personal description, statistics, and interests:

```html
<!-- Update statistics -->
<div class="stat">
    <span class="stat-number">3+</span>
    <span class="stat-label">Years Experience</span>
</div>

<!-- Update interests -->
<div class="interest-item">
    <i class="fas fa-code"></i>
    <span>Clean Code</span>
</div>
```

### 3. Projects

Replace the project cards with your own projects:

```html
<div class="project-card">
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
    </div>
</div>
```

### 4. Skills

Update your skills and proficiency levels:

```html
<div class="skill-item">
    <div class="skill-icon">
        <i class="fab fa-react"></i>
    </div>
    <span>React</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

### 5. Contact Information

Update your contact details:

```html
<div class="contact-method">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-method">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
</div>
```

### 6. Social Links

Update your social media links:

```html
<div class="social-links">
    <a href="https://github.com/yourusername" class="social-link">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/yourusername" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
</div>
```

## Color Customization

The website uses CSS custom properties for easy color customization. Edit the colors in `styles.css`:

```css
:root {
    --bg-primary: #0d1117;        /* Main background */
    --bg-secondary: #161b22;      /* Secondary background */
    --accent-green: #238636;      /* Primary accent */
    --accent-blue: #58a6ff;       /* Secondary accent */
    --text-primary: #f0f6fc;      /* Primary text */
    --text-secondary: #8b949e;    /* Secondary text */
}
```

## Adding New Sections

To add a new section, follow this template:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <div class="section-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

## Performance Optimization

- The particle system can be disabled by commenting out the `initParticles()` call in `script.js`
- The cursor trail effect is disabled by default for better performance
- Images are optimized and use placeholders - replace with your actual images

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Deployment

1. **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages
2. **Netlify**: Drag and drop the folder to Netlify
3. **Vercel**: Connect your GitHub repository to Vercel
4. **Any web server**: Upload files to your web hosting provider

## File Structure

```
myweb/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Tips for Best Results

1. **Images**: Replace placeholder images with high-quality photos
2. **Content**: Write compelling, authentic content about yourself
3. **Projects**: Include live links and GitHub repositories
4. **Performance**: Optimize images and test on different devices
5. **SEO**: Add meta tags and descriptions for better search visibility

## Support

If you need help customizing your website, feel free to:
- Check the code comments for guidance
- Modify colors and styles in the CSS file
- Add or remove sections as needed
- Customize animations and effects

## License

This project is open source and available under the MIT License.

---

**Enjoy your new personal website! 🚀** 