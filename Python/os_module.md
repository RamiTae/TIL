# [OS module](https://docs.python.org/3/library/os.html)

This module provides a portable way of using operating system dependent functionality. If you just want to read or write a file see [open()](https://docs.python.org/3/library/functions.html#open), if you want to manipulate paths, see the [os.path](https://docs.python.org/3/library/os.path.html#module-os.path) module, and if you want to read all the lines in all the files on the command line see the [fileinput](https://docs.python.org/3/library/fileinput.html#module-fileinput) module. For creating temporary files and directories see the [tempfile](https://docs.python.org/3/library/tempfile.html#module-tempfile) module, and for high-level file and directory handling see the [shutil](https://docs.python.org/3/library/shutil.html#module-shutil) module.

## [os.getenv(key, default=None)](https://docs.python.org/3/library/os.html#os.getenv)

Return the value of the environment variable key if it exists, or default if it doesn’t. key, default and the result are str.

On Unix, keys and values are decoded with [sys.getfilesystemencoding()](https://docs.python.org/3/library/sys.html#sys.getfilesystemencoding) and `'surrogateescape'` error handler. Use [os.getenvb()](https://docs.python.org/3/library/os.html#os.getenvb) if you would like to use a different encoding.

Availability: most flavors of Unix, Windows.
