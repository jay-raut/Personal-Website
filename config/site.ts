export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Jay's Website",
  description:
    "Jay's Portfolio built using Tailwind CSS and React",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Contact Me",
      href: "/contact",
    }
  ],
  links: {
    github: "https://github.com/jay-raut",
    mail: "mailto:jayraut@my.yorku.ca"
  },
}
