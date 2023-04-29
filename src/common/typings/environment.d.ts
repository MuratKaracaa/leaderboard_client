declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GATEWAY_URL: string;
    }
  }
}

export {};
