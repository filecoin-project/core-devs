# Core Dev 49 Meeting Notes

**Meeting Date & Time:** Time: Sep 2, 2022 12:00 AM UTC

**Meeting Recording:** 

**Meeting Slides:** [https://docs.google.com/presentation/d/1GypVdPAyM-uR56bK-Aot-QbU7IBqLaLZ8O49RDA__dI/edit#slide=id.g1432336f72c_0_19](https://docs.google.com/presentation/d/1GypVdPAyM-uR56bK-Aot-QbU7IBqLaLZ8O49RDA__dI/edit#slide=id.g1432336f72c_0_19)

**Attendance:** Protocol Labs, Filecoin Foundation, Implementation teams, and other representatives.

### [Discussion - FIP0047 Proof Expiration and Security](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0045.md)

* FIP0047 proposes a new policy and mitigation tool for addressing any potential security vulnerabilities in the PoRep proof process. 
  * FIP0036 introduced a hypothetical case in which PoRep could be vulnerable, under current conditions.
  * FIP0047 exists to address this problem and increase the security of the entire network.
* Implementation would be relatively lightweight; a simple proof refresh, with no resealing. 
  * Alternatively, if we did not accept and implement this change and a vulnerability were discovered, it would require a signficant amount of sealing work on behalf of SPs in order to fix.  
  * If a sector contained a deal and an error was discovered in the PoRep theory, an SP would incur costs to reseal.  Sector termination fees may also exist. 

### [Discussion - FIP0045 Product Request and Discussion](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0045.md)

* FIP0045 still has a few notable pieces that are not resolved. 
  - Terms for Fil+ length can be set to a range, so that multiple deals with overlapping lengths can be packed into the same sector.
  - The client should be able to set the minimum length of a deal, while the market actor picks a longer term for the maximum.
* Core Devs agree that there is governance 'buffer time' for Fil+ and FIP0036, but the issue of datacap management and potential policy migration will need to be figured out soon. 
* What do we do with existing sectors and deals? 
  * The simple answer is nothing. However some clients may want long terms and haven’t been able to select those until now. It would be nice to give those clients the option.
  * If the network were to allow migration of existing deals, there are various issues we could face. If we don’t do a migration, clients can request new datacap and old data can reseal into new sectors. 

### Discussion - V17 Network Upgrade

* v17 mainnet upgrade is tentatively scheduled for November 9. 
  * The final start date for Last Call would thus be Friday, September 9. 
  * FIPs need to be accepted by Friday, September 23, according to the current engineering resource planning around the upgrade. 
  * Many current FIPs which have not yet been accepted are ready for Last Call; they have been available for months, and have garnered very little community interest. 

**Confirmed* in Scope FIPs:**

[FIP0029 Beneficiary Address for Storage Providers [ACCEPTED]](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0029.md)

[FIP0034 Fix PreCommit Deposit Independent of Sector Content [ACCEPTED]](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0034.md)

[FIP0036 Introducing a Sector Duration Multiple for Longer Term Storage Commitment](https://github.com/filecoin-project/FIPs/discussions/421)

[FIP0041 Forward Compatibility for Pre-Commit [ACCEPTED]](https://github.com/filecoin-project/FIPs/pull/395)

[FIP0044 Standard Authentication Method for Actors](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0044.md)

[FIP0045 Decouple Verified Registry from Markets](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0045.md)

[FIP0047 Decouple Verified Registry from Markets](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0045.md)

**Confirmed Out of Scope FIPs:**

[FIPXXXX New API for Builtin Actors Accessible to User-Programmed Actors](https://github.com/filecoin-project/FIPs/discussions/401)

[FIP0043 Signature Domain Separation](https://github.com/filecoin-project/FIPs/discussions/401)
