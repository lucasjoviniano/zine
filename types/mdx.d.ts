declare module "*.mdx" {
  import { ComponentType } from "react";
  const MDXComponent: ComponentType<any>;
  export default MDXComponent;
}

// Also add to ensure TypeScript finds it
declare module "../content/*.mdx" {
  import { ComponentType } from "react";
  const MDXComponent: ComponentType<any>;
  export default MDXComponent;
}
