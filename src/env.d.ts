/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  GITHUB_API_URL: string;
  GITHUB_API_KEY: string;
  GITHUB_REPO_OWNER: string;
  GITHUB_REPO_NAME: string;
  DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}