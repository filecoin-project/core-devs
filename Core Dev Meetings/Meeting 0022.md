# Filecoin Core Devs Meeting #22 - 2021-07-15

- Meeting Date/Time: **Thursday July 15, 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/DGrBmODsgWE
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL), Venus (IPFSForce), Filecoin Foundation and Community representatives

Forest: 

- Got Prometheus metrics and dashboards
- Finishing up CLI functionality for better UX at launch
- Documentation work ongoing
- v13 implementation complete, one consensus mismatch to iron out
- Should be back on mainnet in 2 days
- Major audit remediation is complete, minor items remain
- Some protocol issues discovered in the audit, let's discuss them in the next meeting

Venus: 

- We achieved a big thing, we passed the security audit
- The main achievement of Venus is that we have the security audit done, and got the final report published;
- We did the v1.0.0 is release
- Now working on incubation launch preparation

Lotus:

- We are testing 1.11.0 since we are adding 3 months of work
- A lot of important things are now in master:
    - [Splitstore enhancements](https://github.com/filecoin-project/lotus/pull/6474), with online garbage collection, might be interesting to review
    - [Standalone miner-market process](https://github.com/filecoin-project/lotus/pull/6356)
- We are focusing on integration tests, we changed the way we do tests
- Monitoring Hyperdrive, we shipped the 1.10.1 release for Hotfix purposes, looking good so far

Fuhon:

- Preparing documentation for security audit (code walk)
- Getting things code-freeze ready
- Testing a Lotus miner with Fuhon node on interopnet
- Mainnet node had an issue, investigating

Foundation:

- Excited about HyperDrive and the buzz in the community
- Bug bounty program being extended to all implementations of Filecoin
- [We are hiring](https://jobs.lever.co/filecoin/)

Lotus pricelist issue:

- Noticed that pricelist was indexed by epoch (and not network version)
- Solution was to introduce a "network version six and a half"
- Fixing Lotus to now use network versions
- Relevant PRs:
    - https://github.com/filecoin-project/go-state-types/pull/30/
    - https://github.com/filecoin-project/lotus/pull/6766

Lotus drand issue

- Had to reopen https://github.com/filecoin-project/lotus/issues/3613
- Lotus now fetches one (or more) round(s) ahead, instead of behind
- Still wrong, but not too consequential
- Ideally would have been caught in review / testing
- AI: Extend network upgrade testing window, pay close attention to any incompatibilities between impls

[FIP-0016](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0016.md)

- Implementation details have been added by author, reviewed
- Concerns around the economic impact of reducing the utility of the asset securing the network  
- More thorough CryptoEcon / economic security analysis needed
- Unclear how much the proposal is wanted by the community / what the impact would be
- Some surveying of demand would be useful
- Concerns around any proposal that increases state-tree size in the short-term after HyperDrive
