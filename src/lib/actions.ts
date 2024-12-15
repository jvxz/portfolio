import z from "zod";

const gitInfoSchema = z.array(
    z.object({
        sha: z.string(),
        commit: z.object({
            committer: z.object({
                date: z.string()
            })

        }),
        html_url: z.string()
    }),
);

export async function getGitInfo() {
    const response = await fetch(
        "https://api.github.com/repos/jvxz/portfolio/commits",
    );
    const data: unknown = await response.json();
    const dataParsed = gitInfoSchema.parse(data);
    return dataParsed;
}
