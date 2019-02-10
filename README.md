lookup
======

look a word in the dictionary

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Version](https://img.shields.io/npm/v/lookup.svg)](https://npmjs.org/package/lookup)
[![CircleCI](https://circleci.com/gh/Enter-tainer/lookup/tree/master.svg?style=shield)](https://circleci.com/gh/Enter-tainer/lookup/tree/master)
[![Codecov](https://codecov.io/gh/Enter-tainer/lookup/branch/master/graph/badge.svg)](https://codecov.io/gh/Enter-tainer/lookup)
[![Downloads/week](https://img.shields.io/npm/dw/lookup.svg)](https://npmjs.org/package/lookup)
[![License](https://img.shields.io/npm/l/lookup.svg)](https://github.com/Enter-tainer/lookup/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g lookup
$ lookup COMMAND
running command...
$ lookup (-v|--version|version)
lookup/0.0.0 linux-x64 node-v11.6.0
$ lookup --help [COMMAND]
USAGE
  $ lookup COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`lookup hello [FILE]`](#lookup-hello-file)
* [`lookup help [COMMAND]`](#lookup-help-command)

## `lookup hello [FILE]`

describe the command here

```
USAGE
  $ lookup hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ lookup hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Enter-tainer/lookup/blob/v0.0.0/src/commands/hello.ts)_

## `lookup help [COMMAND]`

display help for lookup

```
USAGE
  $ lookup help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
