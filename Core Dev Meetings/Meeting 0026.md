# Filecoin Core Devs Meeting #26 - 09 September 2021

- Meeting Date/Time: **Thursday, September 9 2021, [16:00 UTC](https://savvytime.com/converter/utc-to-germany-berlin-united-kingdom-london-ny-new-york-city-ca-san-francisco-china-shanghai-japan-tokyo-australia-sydney/16-00)**
- Meeting Recording: TODO
- Attendance: Forest (Chainsafe), Fuhon (Soramitsu), Lotus (PL),  Venus (IPFSForce), Filecoin Foundation, and community developers

Lotus:
- V1.11.02 has been released; includes a series of small upgrades and market -side improvements. 
- ChainWatch has been deprecated

Forest:
- No updates; the team is continuing to work on product research and consensus issues.

Fuhon:
- Mainnet launch still scheduled for the week of 9/17, but may need to be pushed to 9/24.
- Currently working on addressing bugs and API security enhancements.

Venus:
- Team is working to onboard new clients to the incubation system. 
- Received 70 client applications and established 10 new nodes. 
- Market module to be released before the end of September. 
- Market design specs will be uploaded to Github in the coming week, and shared directly with other implementers. 

Filecoin Foundation:
- Focused on streamlining team workflows and product enhancements for large-scale FIPs and other work -intensive protocol changes. 
- Kaitlin will be reaching out to implementation teams to discuss project planning needs. 

Upcoming small- and medium-sized network enhancements for Fall 2021
- A mid-Autumn implementation will include small upgrades from backlogged FIPs.
- One improvement which will be made is the [tipset tie-break rule](https://github.com/filecoin-project/FIPs/pull/156/commits/84546c4e8ae0216009219c073cc88c2803293492), which helps the network decide between forks of equal weight and reach consensus more quickly.

Review of upcoming FIPs & existing PRs
- With new clients onboarding to the network there is a focus on improving the dealmaking workflow to make for smoother execution.  
- To address this, the following FIPs have/will be drafted: 
    - [A FIP to help deals succeed](https://github.com/filecoin-project/FIPs/issues/152), even if individual DealIDs in the sector expire between PreCommit and ProveCommit 
    - [A FIP to help publish all valid deals](https://github.com/filecoin-project/FIPs/issues/142) attached to a PublishStorageDeals message, even if a bad deal is present in the sector. 
    - [A FIP to help clarify how much $FIL has been withdrawn](https://github.com/filecoin-project/FIPs/issues/26) from an actor during dealmaking. 

Discussion: Filecoin Funding DevGrants proposal
- A team of developers (contact: @CatTheHunter) has submitted [a DevGrants proposal](https://github.com/catthehunter/devgrants/blob/patch-2/open-grant-proposals/Filecoin%20Financing%20Plan.md) for building a $FIL lending mechanism into the protocol. 
- The purpose of this proposal is to help offset upfront investment for new storage providers. 
- There are other lending tools available; this proposal is specifically for a protocol -level change. 
- Although this proposal was submitted as a DevGrant, the team requests review to see if a protocol change is useful and/or feasible for this use-case.  If so, a FIP will be drafted.
