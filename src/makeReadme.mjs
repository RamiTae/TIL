import { readdir, lstat, copyFile, open } from "fs/promises";

export async function makeReadme() {
  const dirList = await readdir("./");

  const fileDataList = (
    await Promise.all(
      dirList.map(async (dir) => {
        if (dir[0] === ".") {
          return;
        }
        if (dir === "asset" || dir === "src") {
          return;
        }

        const path = `./${dir}`;
        const stats = await lstat(path);
        if (!stats.isDirectory()) {
          return;
        }

        const fileList = await readdir(path);
        if (!fileList.length) {
          return;
        }

        return { dir, fileList };
      })
    )
  ).filter(Boolean);

  await copyFile("./asset/template/README.md", "./README.md");
  const filehandle = await open("./README.md", "a");

  const text = fileDataList.reduce((acc, val) => {
    acc += `## ${val.dir}\n`;
    val.fileList.forEach((file) => {
      const subject = file.replace(/-/g, " ").replace(".md", "");
      const path = `/${val.dir}/${file}`;

      acc += `* [${subject}](${path})\n`;
    });

    return acc;
  }, "\n");

  console.log(text);
  await filehandle.appendFile(text);
}

makeReadme();
