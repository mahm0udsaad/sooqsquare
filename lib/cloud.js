import { createAdapter } from "webdav-fs";

const username = "nextcloud";
const password = "EXZMx-yYLMY-DXjt8-onetF-4rMbf";
const remotePath = `https://cloud.sooqsquare.com/remote.php/dav/files/${username}`;
const client = createAdapter(remotePath, {
  username,
  password,
});

export default client;
