Stack:
- Tanstack Router for the routing & the main framework
- TailwindCSS for the styling
- React for the library to go with Tanstack
- Cloudflare Pages for the hosting
- Bun for the toolkit
- Vite for the build tool
- Posthog for the site analytics (WIP)

Dev stack:
- Biome for the linting & formatting
- React Scan for debugging re-renders

Fixed issues:
- Inconsistent border radii
- Inconsistent icon sizes
- Inconsistent tag widths
- Circular checkboxes which are supposed to be square. Circular checkboxes are called radio buttons.
- Many more


I seriously don't know why src/logo.svg needs to exist, if I remove it, the site doesn't work so I placed in a random SVG for the place. Nothing in the project is using "logo.svg", weird...
