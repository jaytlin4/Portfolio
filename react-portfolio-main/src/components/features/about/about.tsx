import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      {/* 🎯 Display the section title and subtitle */}
      <Headings title="About" subtitle="Hi, I'm Jaytlin." />{' '}
      {/* 📝 Edit the biography below to reflect your own journey and interests */}
      <p className="about-text">
      I am a dedicated and passionate professional committed to continuous growth and excellence in my field.
      My journey in technology has been marked by numerous achievements, and I am unwavering in my
      pursuit of new challenges and opportunities to expand my expertise. I am driven to enhance every work
      environment I engage with and collaborate with teams to achieve our shared goals. I am inherently self-
      motivated, and my positive attitude makes me a valuable and enjoyable team member. Follow my
        {/* 🔗 Update the href attribute with your Instagram link */}
        <a className="about-link" href="https://www.linkedin.com/in/jaytlin-askew-86b7a0174/" target="_blank" rel="noreferrer">
          LinkedIn
          {/* 🔄 Change 'Instagram' to your preferred social media or remove if not applicable */}
        </a>{' '}
        to see my journey!
      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }
