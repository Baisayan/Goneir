import { Redis } from "@upstash/redis";

export const redis = Redis.fromEnv();

export const RedisKeys = {
  roomMeta: (roomId: string) => `meta:${roomId}`,
  roomMessages: (roomId: string) => `messages:${roomId}`,
  roomStream: (roomId: string) => `${roomId}`,
} as const;