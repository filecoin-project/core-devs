# Filecoin Core Devs Meeting #8 - 2020-12-17

- Meeting Date/Time: **Thursday 17 December 2020, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/DqKlP33qi4c
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce)

[FIP-0009](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0009.md):

- Exempts direct SubmitWindowedPoSt messages that execute successfully from base-fee burn
- Approved by the various implementations
- Stopgap solution that is a good precursor to [off-chain WindowPoSt verification](https://github.com/filecoin-project/FIPs/issues/42)

Lotus:

- Shipped [1.3.0](https://github.com/filecoin-project/lotus/releases/tag/v1.3.0), which implements FIP-0009
- Network upgrades at height 343200
- Specs-actors team has been prepping off-chain WindowPoSt verification

Venus:

- Ran Venus in calibration network, it syncs the entire chain!
- Mining interface is close to complete, hope to add a miner to the network soon
- Chain sync performance isn't great yet
    + Some tipsets take 8-10 seconds to validate
    + Uses about twice as much space as Lotus, memory usage also needs to be optimized

Fuhon:

- Continuing to work on chain sync
- Resolved an issue with using the DHT
- Facing an issue fetching blocks from Lotus nodes
- Miner is close to functional -- can submit blocks to a local network of Lotus nodes
- Reward and Miner actor are implemented

Forest:

- Drew up goals to get audit-ready
- Interop with mainnet:
    + Be able to switch between actor versions: Done!
    + Match v2 actors: Only miner actor remains
- Get miner working
    + Integrate miner with Forest daemon: Done!
    + Get full mining lifecycle working: Can currently commit a sector
- Keep Lotus and Forest devnet alive
    + Close to done, needs minor work on chain sync

Test vectors:

- Can now extract full tipsets from live chains
- Can also extract a range as well such as @123456..@123499. 
- Can now play an extracted tipset against a candidate protocol version, and use statediff to verify the differences in state
- Working on adding a feature to execute a callback after applying every tipset in a vector. This will allow us to capture things from the state that we want to chart/analyse further. For example, we can save the balances of all actors at every tipset.
- Provides a way to backtest a candidate fork against chain history.

Questions and suggestions:

- We should have a place where people can quickly lookup what's getting into the next network upgrade
- We should consider simulating some of the attacks on FIP-0009

