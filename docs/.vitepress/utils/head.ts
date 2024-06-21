import { HeadConfig } from 'vitepress/types/shared';

export function meta(
  property: string,
  content: string,
  attrName: 'name' | 'property' = 'property',
): HeadConfig {
  return [
    'meta',
    {
      [attrName]: property,
      content,
    },
  ];
}

export function script(
  src: string,
  props: Record<string, string> = {},
): HeadConfig {
  return [
    'script',
    {
      ...props,
      src,
    },
  ];
}
