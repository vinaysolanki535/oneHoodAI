import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Music Prompt is required",
  }),
});

export interface generatedMusic {
  prompt: string;
  src: string;
}
