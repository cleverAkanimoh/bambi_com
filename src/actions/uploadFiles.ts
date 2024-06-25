"use server";

import { UTApi } from "uploadthing/server";
export const utapi = new UTApi();

import { log } from "console";

export default async function deleteCv({ name }: { name: string | string[] }) {
  const response = await utapi.deleteFiles(name);
  log(response);
  return response;
}
