import { mkdirSync, writeFileSync } from "node:fs";

// The funniest sign for the door of a haunted server room.
// The ghost did the proper IT thing and filed a ticket; IT did the
// proper IT thing and closed it as unreproducible.
const LINE =
  "NOTICE: The ghost in this server room filed a ticket. IT closed it as 'cannot reproduce'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
