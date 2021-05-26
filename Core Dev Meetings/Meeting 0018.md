# Filecoin Core Devs Meeting #18 - 2021-05-20

- Meeting Date/Time: **Thursday May 20 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/L2SMR4gjQ3I
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce), Filecoin Foundation

Fuhon:

- Work on stabilizing and plugging memory leaks
- With two fixes, libp2p doesn't seem to leak memory after 2+ days of running
- Segfault identified during noise handshake, fixed
- Work on proper tipset handling to not be completely stored in memory
- Couple other segfaults identified as fixed
- Plan to let it run for 1-2 weeks and check for stability

Venus:

- Working through issues identified in first report from security audit
- Waiting on further audit feedback and final report, hopefully in the next 2 weeks
- Set up a first distributed mining pool on mainnet, soliciting miners to join for testing purposes
- Intending to setup a second pool aimed at smaller and geographically distributed miners
- Planning to write up RFPs to get more contributions
- Working on markets module to store real data that lives at the mining pool level (instead of individual miners)

Forest:

- Introducing a new team member: Welcome Lee!
- Things from audit have been relatively quiet, issues being addressed quickly
- Thinking ahead about next steps
- Working on payment channel stuff and integrating go-fil-markets
- Introduced a framework for state migrations so that people can sync from genesis
- Adding instrumentation to be able to report on performance metrics (using Prometheus and Grafana)
- UX work: CLI improvements
- Actors v5 support to begin next week
- Work on improving validation speed, lowering RAM usage, fixing segfaults
Question: How big full archive node?

Lotus:

- v1.9.0 has been released, with various improvements to sealing, mining, and deal-making
- Introduces proofs v7.0.1, which enables GPU2 enabled by default, `PreCommit2` and `Commit2` now significantly faster
- Lotus now offers pre-built binaries
- Lotus v1.10.0 will introduce v5 actors, RC to come next week for miners to start experimenting with and testing
- Integration of FIPs 0008 and 0013 underway
- Tooling complete to create genesis files from any version of actors
- Lotus miner runtime segregation underway, see [here](https://github.com/protocol/web3-dev-team/blob/raulk/lotus-miner-runtime-segregation/proposals/lotus-miner-runtime-segregation.md)
- 

Filecoin Foundation & Community:

- Mining working group is being setup
- Actively hiring, please see: https://jobs.lever.co/filecoin/
- Accepting applications for second round of MinerX program!
- Blogpost about HyperDrive upgrade coming soon

v5 actors:

- Implementation complete
- Final parameter setting and gas tuning underway
- `ProveCommitAggregateMax` is currently 204, considering being bumped to 400-800
- Considering allowing gap between `PreCommit` and `ProveCommit` to a month (benefits smaller miners)
- Consider increasing the max `PreCommit` batch size from 32 to 64/128
- New param to make `PreCommit` expiry errors cause less damage: `ExpiredPreCommitCleanUpDelay` set to 8 hours
- Updating H/AMT with non-consensus critical optimizations to diffing

FIP-0015:

- Proposes reverting FIP-0009 now that we have Optimistic WindowPoSt and other improvements
- Generally accepted, may be included in HyperDrive upgrade
- Nudges miners to prove as much as possible in a single `SubmitWindowedPoSt` message

RPC standardization:

- Forest currently reuses the Lotus miner, which relies on Lotus RPC endpoints
- If that changes, especially with no changelog, it's confusing
- Proposal is to standardize some components of the JSON-RPC interface
- People building libraries on top of the RPC will probably want every impl to agree
- Lotus v1 API is under development, meant to be an internal-only thing for now
- Moving towards standardized RPC is favoured by the various impl
- Lotus will externalize v1 API changes

Interopnet:

- Tooling complete to create genesis files from any version of actors
- Will be used to kick off interopnet next week using either v4 or v5 actors