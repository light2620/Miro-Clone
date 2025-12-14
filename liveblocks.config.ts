import {
  createClient,
  LiveList,
  LiveMap,
  LiveObject,
} from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import type { Layer, Color } from "@/types/canvas";

/* ------------------------------------------------------------------ */
/* Liveblocks Client                                                   */
/* ------------------------------------------------------------------ */

const client = createClient({
  authEndpoint: "/api/liveblocks-auth",
  throttle: 16,

  /**
   * Resolve users for Comments, Mentions, and Presence
   * This MUST live inside createClient (Liveblocks >= 1.10)
   */
  async resolveUsers({ userIds }) {
    // Replace with your DB / Auth provider lookup
    return userIds.map((id) => ({
      name: id,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(id)}`,
    }));
  },

  /**
   * Resolve mention suggestions for Comments
   */
  async resolveMentionSuggestions({ text }) {
    // Example static fallback
    // Replace with DB search
    if (!text) return [];

    return [];
  },
});

/* ------------------------------------------------------------------ */
/* Presence Types                                                      */
/* ------------------------------------------------------------------ */

type Presence = {
  cursor: { x: number; y: number } | null;
  selection: string[];
  pencilDraft: [x: number, y: number, pressure: number][] | null;
  pencilColor: Color | null;
};

/* ------------------------------------------------------------------ */
/* Storage Types                                                       */
/* ------------------------------------------------------------------ */

type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>;
  layerIds: LiveList<string>;
};

/* ------------------------------------------------------------------ */
/* User Metadata                                                       */
/* ------------------------------------------------------------------ */

type UserMeta = {
  id?: string;
  info?: {
    name?: string;
    picture?: string;
  };
};

/* ------------------------------------------------------------------ */
/* Room Events                                                         */
/* ------------------------------------------------------------------ */

type RoomEvent = {
  // Add custom events here if needed
};

/* ------------------------------------------------------------------ */
/* Thread Metadata (Comments)                                          */
/* ------------------------------------------------------------------ */

export type ThreadMetadata = {
  // resolved?: boolean;
  // quote?: string;
  // time?: number;
};

/* ------------------------------------------------------------------ */
/* Room Context                                                        */
/* ------------------------------------------------------------------ */

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,

    // Comments API
    useThreads,
    useUser,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
  },
} = createRoomContext<
  Presence,
  Storage,
  UserMeta,
  RoomEvent,
  ThreadMetadata
>(client);
