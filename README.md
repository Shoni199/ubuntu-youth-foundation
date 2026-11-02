Base Styling

A CSS reset was implemented to remove default browser margins and padding and to provide consistent styling across browsers.

Base styles were also established for:

Font family
Font size
Line height
Text colour
Background colour
Images
Links
Form elements
Typography

Typography styles were applied using CSS properties including:

font-family
font-size
font-weight
line-height
letter-spacing

Relative rem units were used for typography and spacing.

Layout

CSS Grid and Flexbox were used to create the website layout.

The layout includes:

Flexible header and navigation
Responsive hero sections
Multi-column programme cards
Flexible footer layout
Responsive content containers
Visual Styling

Visual styles were added to improve the appearance of the website, including:

Background colours
Text colours
Borders
Rounded corners
Box shadows
Button styling
Form styling
Hover effects
Focus effects
Responsive Design

Media queries were added to support different screen sizes.

The website includes responsive layouts for:

Desktop
Tablet
Mobile

On smaller screens, multi-column layouts are changed to single-column layouts where appropriate. Navigation, typography, spacing and content sections are also adjusted for smaller screens.

Responsive Images

The website uses the HTML <picture> element and srcset to support responsive image loading and display.

Example:

Technologies Used

The following technologies and tools were used during the project:

HTML5
CSS3
JavaScript
Visual Studio Code
Git
GitHub
Web browser developer tools
Free-to-use online image resources
File and Folder Structure
Responsive Design Testing

The website was tested using browser developer tools at different screen sizes.

Desktop Testing

The website was tested at a desktop screen size to check the navigation, layout, images, text and overall presentation.

Screenshot:
Add desktop screenshot here.

Tablet Testing

The website was tested at a tablet screen size to ensure that the layout adapts correctly and that content remains readable.

Screenshot:
Add tablet screenshot here.

Mobile Testing

The website was tested at a mobile screen size to ensure that navigation, images, text and content remain usable on smaller screens.

Screenshot:
Add mobile screenshot here.

GitHub Development

Git and GitHub were used to manage the development of the website.

Changes were committed regularly using descriptive commit messages and pushed to the remote GitHub repository.

GitHub Repository:

https://github.com/Shoni199/ubuntu-youth-foundation

Part 2 Development

Part 2 involved building on the HTML foundation created in Part 1.

The main development activities included:

Creating and applying the external CSS stylesheet.
Establishing a CSS reset and base styles.
Applying typography styles.
Creating layouts using CSS Grid and Flexbox.
Applying visual styling to website elements.
Adding hover and focus states.
Creating responsive breakpoints.
Using relative units for responsive sizing.
Implementing responsive image techniques.
Testing the website on desktop, tablet and mobile screen sizes.
Updating the README documentation.
Updating the project changelog.
Committing and pushing changes to GitHub.
Project Development

The website was developed using Visual Studio Code and managed using Git for version control.

The development process involved creating the initial HTML structure, organising the website files, adding CSS styling, implementing responsive design and testing the website across different screen sizes.

Author

Mashonelo Thidiela

WEDE5020

## POE Part 3 additions (2 November 2026)

The Part 2 HTML pages, original CSS design, colour palette, page layouts and supplied image assets have been retained. Part 3 additions are appended to the existing stylesheet and JavaScript file.

### JavaScript enhancements
- FAQ accordion controls on the programmes page.
- Image gallery with a lightbox on the About page, using the project's existing image assets.
- Live text search to filter programme sections.
- Interactive Leaflet map on the Contact page, with clearly labelled general-area markers for Johannesburg and Soweto.
- Form validity checks using HTML5 browser validation.

### SEO and accessibility
- Updated unique page titles and meta descriptions.
- Added robots.txt and sitemap.xml templates; replace `YOUR-PUBLISHED-DOMAIN` after deployment.
- Improved the About page image alternative text.
- Added keyboard focus indicators and reduced-motion support.
- Standardised filenames to lowercase to match the existing navigation links on case-sensitive hosting.

### Forms
The existing forms and their original content are retained. The JavaScript checks browser validity before the form's configured action proceeds. A static HTML site cannot securely process or store submissions by itself. To meet asynchronous/AJAX submission fully, connect a form backend or hosted form service and test it before final submission.

### Part 3 references
- Google Search Central (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).
- MDN Web Docs (n.d.) *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (Accessed: 2 November 2026).
- Leaflet (n.d.) *Leaflet documentation*. Available at: https://leafletjs.com/reference.html (Accessed: 2 November 2026).
- OpenStreetMap contributors (n.d.) *Copyright and license*. Available at: https://www.openstreetmap.org/copyright (Accessed: 2 November 2026).
- W3C (2023) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 2 November 2026).
