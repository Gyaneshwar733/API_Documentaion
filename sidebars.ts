import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  openApiSidebar: [
    {
      type: "category",
      label: "Dataseers",
      link: {
        type: "generated-index",
        title: "Dataseers",
        slug: "/"
      },
      items: [...require("./docs/sidebar.js")]
    }
  ]
};

export default sidebars;