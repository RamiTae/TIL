# fsPromise

## [fsPromise.lstat 사용 예제](https://www.geeksforgeeks.org/node-js-fspromise-lstat-method/)

- stats.isDirectory(): Returns true if stats object describes a file system directory.
- stats.isFile(): Returns true if stats object describes a regular file.
- stats.isSocket(): Returns true if stats object describes a socket.
- stats.isSymbolicLink(): Returns true if stats object describes a symbolic link.
- stats.isFile(): Returns true if stats object describes a regular file.
- stats.isFIFO(): Returns true if stats object describes first in first out pipe.
- stats.size: Specifies the size of the file in bytes.
- stats.blocks: Specifies the number of blocks allocated for the file.

## fsPromises.copyFile(src, dest[, mode])

- src \<string> | \<Buffer> | \<URL> source filename to copy
- dest \<string> | \<Buffer> | \<URL> destination filename of the copy operation
- mode \<integer> Optional modifiers that specify the behavior of the copy operation. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE) Default: 0.
  - fs.constants.COPYFILE_EXCL: The copy operation will fail if dest already exists.
  - fs.constants.COPYFILE_FICLONE: The copy operation will attempt to create a copy-on-write reflink. If the platform does not support copy-on-write, then a fallback copy mechanism is used.
  - fs.constants.COPYFILE_FICLONE_FORCE: The copy operation will attempt to create a copy-on-write reflink. If the platform does not support copy-on-write, then the operation will fail.
- Returns: \<Promise> Fulfills with undefined upon success.

  Asynchronously copies src to dest. By default, dest is overwritten if it already exists.

  No guarantees are made about the atomicity of the copy operation. If an error occurs after the destination file has been opened for writing, an attempt will be made to remove the destination.

  ```js
  import { constants } from "fs";
  import { copyFile } from "fs/promises";

  try {
    await copyFile("source.txt", "destination.txt");
    console.log("source.txt was copied to destination.txt");
  } catch {
    console.log("The file could not be copied");
  }

  // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
  try {
    await copyFile("source.txt", "destination.txt", constants.COPYFILE_EXCL);
    console.log("source.txt was copied to destination.txt");
  } catch {
    console.log("The file could not be copied");
  }
  ```

## Class: FileHandle

A \<FileHandle> object is an object wrapper for a numeric file descriptor.

Instances of the \<FileHandle> object are created by the fsPromises.open() method.

All \<FileHandle> objects are \<EventEmitter>s.

If a \<FileHandle> is not closed using the filehandle.close() method, it will try to automatically close the file descriptor and emit a process warning, helping to prevent memory leaks. Please do not rely on this behavior because it can be unreliable and the file may not be closed. Instead, always explicitly close \<FileHandle>s. Node.js may change this behavior in the future.

### Event: 'close'

The 'close' event is emitted when the \<FileHandle> has been closed and can no longer be used.

## filehandle.createWriteStream([options])

- options \<Object>
- encoding \<string> Default: 'utf8'
- autoClose \<boolean> Default: true
- emitClose \<boolean> Default: true
- start \<integer>
- Returns: \<fs.WriteStream>

  options may also include a start option to allow writing data at some position past the beginning of the file, allowed values are in the [0, Number.MAX_SAFE_INTEGER] range. Modifying a file rather than replacing it may require the flags open option to be set to r+ rather than the default r. The encoding can be any one of those accepted by \<Buffer>.

  If autoClose is set to true (default behavior) on 'error' or 'finish' the file descriptor will be closed automatically. If autoClose is false, then the file descriptor won't be closed, even if there's an error. It is the application's responsibility to close it and make sure there's no file descriptor leak.

  By default, the stream will emit a 'close' event after it has been destroyed. Set the emitClose option to false to change this behavior.
