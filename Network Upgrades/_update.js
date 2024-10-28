#!/usr/bin/env node

// This script generates the README.md file from the upgrades.json file.
// It should be run each time upgrades.json is updated.

// Some quirks about the upgrades.json file:
// - The FIP field is an array of FIP numbers, but it can also be an array of arrays where the
//   first element is the FIP number and the second element is a string that will be included in
//   the markdown link. This is useful when there are notes or clarifications about the FIP.
// - If the activation.mainnet.epoch field is null, it means the epoch is TBD.
// - If the activation.mainnet.epoch field is null but the activation.mainnet.time field is not null,
//   it means the epoch is TBD but the date and time have been proposed.
// - builtin-actors began at version 8, so we don't link to the actors repo for upgrades before that.

const join = require('node:path').join
const writeFileSync = require('node:fs').writeFileSync

const networkUpgrades = require('../upgrades.json')

function formatDateTime(dateTime, tbd) {
  if (dateTime == null) {
    return 'TBD'
  }
  const date = new Date(dateTime)
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')
  const hours = String(date.getUTCHours()).padStart(2, '0')
  const minutes = String(date.getUTCMinutes()).padStart(2, '0')
  const seconds = String(date.getUTCSeconds()).padStart(2, '0')
  let d = `${year}-${month}-${day}`
  if (!tbd) {
    d += ` ${hours}:${minutes}:${seconds}`
  } else {
    d += ' TBD'
  }
  return d
}

function generateMarkdown(data) {
  const table = data.networkUpgrades.map((upgrade) => {
    const versionString = `v${String(upgrade.upgrade).padStart(2, '0')}`
    const number = `[${versionString}](./${versionString}.md)`
    let actorsVersion = upgrade.actorsVersion
    if (
      upgrade.activation.mainnet.epoch != null &&
      parseInt(actorsVersion.replace('v', '').split('.')[0]) >= 8
    ) {
      actorsVersion = `[${actorsVersion}](https://github.com/filecoin-project/builtin-actors/releases/tag/${actorsVersion})`
    }
    const fips =
      upgrade.fips.length > 0
        ? upgrade.fips
            .map(
              (fip) => {
                const fipNum = Array.isArray(fip) ? fip[0] : fip
                const fipExtra = Array.isArray(fip) ? `&nbsp;(${fip[1].replace(' ', '&nbsp;')})` : ''
                return `[FIP-${fipNum}${fipExtra}](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-${fipNum}.md)`
              }
            )
            .join(', ')
        : 'No FIPs'
    const epoch =
      upgrade.activation.mainnet.epoch != null ? upgrade.activation.mainnet.epoch : 'TBD'
    const dateTime = formatDateTime(upgrade.activation.mainnet.time, upgrade.activation.mainnet.epoch == null)
    return [number, upgrade.name, actorsVersion, fips, epoch, dateTime]
  })

  table.unshift([
    'Upgrade #',
    'Upgrade name',
    'Actors Version',
    'FIPs included',
    'Epoch',
    'Date and Time (UTC)',
  ])

  const maxWidths = table.reduce(
    (acc, row) => {
      return acc.map((width, i) => Math.max(width, String(row[i]).length))
    },
    [0, 0, 0, 0, 0, 0]
  )

  // pad all the cells to maxWidth
  table.forEach((row, i) => {
    table[i] = row.map((cell, j) => String(cell).padEnd(maxWidths[j], ' '))
  })

  lines = table.map((row, i) => '| ' + row.join(' | ') + ' |')
  lines.splice(1, 0, '|:' + maxWidths.map((width) => '-'.repeat(width)).join(':|:') + ':|')

  return `<!-- This file is auto-generated. Do not edit! Run _update.js to update it. -->
<!-- See ../upgrades.json for the source data for this table. -->

## Network Upgrades
${lines.join('\n')}
`
}

writeFileSync(join(__dirname, 'README.md'), generateMarkdown(networkUpgrades))
