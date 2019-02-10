import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import cli from 'cli-ux'
import terminalLink from 'terminal-link'

import getDefination from './api/bing'
class Lookup extends Command {
  static description = 'describe the command here'
  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' })
  }
  static args = [{ name: 'word' }]

  async run() {
    const { args } = this.parse(Lookup)
    cli.action.start('Querying')
    const res = await getDefination(args.word)
    cli.action.stop()
    this.log(chalk.bgHex('#0393a0').white(` ${res.word} `))
    this.log(chalk.bgBlue.white(' AmE: ') + terminalLink(` /${res.pronunciation.AmE}/`, res.pronunciation.AmEmp3))
    this.log(chalk.bgBlue.white(' BrE: ') + terminalLink(` /${res.pronunciation.BrE}/`, res.pronunciation.BrEmp3))
    for (const i of res.defs) {
      this.log(chalk.bgHex('#04438c').white(` ${i.pos} `) + ` ${i.def} `)
    }
  }
}

export = Lookup
