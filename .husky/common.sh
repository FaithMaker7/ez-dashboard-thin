#!/bin/sh
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Windows 10 & Git Bash 兼容
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
