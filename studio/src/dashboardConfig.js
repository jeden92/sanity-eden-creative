export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "626157b613849b681fbaad43",
                  title: "Sanity Studio",
                  name: "sanity-eden-creative-studio",
                  apiId: "5ec210ae-6ddf-4e24-a982-e4ecde9a5c2d",
                },
                {
                  buildHookId: "626157b693ef6f67b372aeb8",
                  title: "Blog Website",
                  name: "sanity-eden-creative",
                  apiId: "89677101-1994-4b61-b53b-50592ca6bd99",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jeden92/sanity-eden-creative",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-eden-creative.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
