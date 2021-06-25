# Filecoin Core Devs Meeting #20 - 2021-06-17

- Meeting Date/Time: **Thursday June 17  2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: https://youtu.be/wHr5lbtD_Z8
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL), Venus (IPFSForce), Filecoin Foundation and Community representatives

Lotus:

- We did some fixes on the bugs we found, which were solved.
- Calibration net is now used for testing, we found 1 proofs issues which was fixed
- RC5 is our the latest release, seems pretty stable for us.
- Miners are adopting and testing the codebase, everything seems good so far.
- Generated test vectors, we have auto-generated test vectors to run against codebase - [https://github.com/filecoin-project/specs-actors/tree/master/test-vectors#readme](https://github.com/filecoin-project/specs-actors/tree/master/test-vectors#readme)

Forest:

- Fixing on bugs we found in the audit, that was the biggest priority for us in the past week
- Working on Proofs libraries + FIP updates for the V5 Actors version
- Working on dashboard to get more insight  - Grafana updates are there
- We are working on user documentation for our first release

Fuhon:

- We have great news - we were able to solve memory leak issues, everything seems normal in testing phase for us.
- We are running test and will let it run for the next week, to make sure everything is right
- Next up is the security audit for us, we will contact someone from the foundation to help out
- We have refactored our API, which was linked with our memory leak issue. All good on this front.

Venus:

- In the last two weeks, we have successfully integrated Actors V5. Calibration also works for us.
- We completed our initial version of our first component  - Gateway which will allow users to access in an easier way.
- We are working on improvements to our Github repo, including our FAQ section. We will use this to explain to small miners how to connect to our service. Repo Link: [https://venus.filecoin.io/Overview.html](https://venus.filecoin.io/Overview.html)
- In the next 2 weeks we will on the new network version upgrade, to make sure it’s successful + work on items which are found in our audit report, to have a final version.

Filecoin Foundation:

- We launched the miner working group, from all over the world. We created a forum for them to share opinions and have discussions
- Blog post related to this:[https://filecoinfoundation.medium.com/supporting-the-community-the-filecoin-mining-working-group-4bd5f289cbea](https://filecoinfoundation.medium.com/supporting-the-community-the-filecoin-mining-working-group-4bd5f289cbea)
- We want to make sure that everyone has an equal opportunity to share their opinion and ideas for the foundation
- Audits for live networks is a good idea, we want all implementators to test it our. Would be great to test this our in more details in the months to come

Community:

- We need to talk about how we include community in planning for next releases
- Developer portal - we are trying to build will need review from this group in order to improve it and get the best potential UX for users

HyperDrive Network upgrade:

- Hyperdrive simulations are run in the last 2 weeks: We created a simulated blockchain where we did window posts and other operations in order to try to predict what will happen after we launch.
- State tree grows 1.7GB per day, which is really a lot and more than we expected. From this, we can project how big the snapshots will be. We are looking at the massive growth in size after 6 months, looking at the end of this year.
- We have ideas on how we can tackle this and will discuss ideas in the weeks to come. For now, we are moving ahead with release, knowing that we will need to deal with this in the future.

For now, we stay on the path to deliver HyperDrive v13 for faster network growth, as originally planned.