# Core Dev Meeting #75 

**Meeting Date & Time:** Thursday 14, November 2024 16:00 UTC

**Meeting Recording:** See README

**Meeting Slides:** https://docs.google.com/presentation/d/1hArFEQ6dEMx20MxOtHGnAKjEkO6Sje7Yv0fInKwwszs/edit#slide=id.g19157ff4f70_0_0


---

## nv24 Tuk Tuk Upgrade Updates  
#### Orjan Roren (FilOz)

### Context
- The NV24 upgrade successfully activated on the Calibration network approximately 3-4 weeks ago.
- About a week later, F3 was activated on the Calibration network.
- Initial bootstrapping and activation of F3 were successful.
- Subsequent testing identified:
  - A client/SP block production issue in the F3 protocol.
  - A protocol-level issue within F3 itself.

### Delay in F3 Activation
- In response to the identified issues:
  - Implementation teams worked to diagnose and address the problems.
  - A final issue was identified just before the Mainnet release deadline.
- Decision:
  - Delay F3 activation to ensure adequate testing and safety.
  - NV24 will proceed with the scheduled three FIPs but without F3 activation.
- Communication:
  - Updates have been shared in Core Dev discussions on GitHub and community channels.

### NV25 Planning
- F3 activation is tentatively rescheduled for early January 2025 as part of NV25.
- Further discussion on specific dates for NV25 is scheduled later in the meeting.

## Next Steps
- Continue comprehensive testing and resolution of F3-related issues.
- Confirm and finalize NV25 activation timeline.
- Ensure timely and clear communication regarding F3 updates.

## Blockers
- Completion of F3 issue resolution and testing before Mainnet activation.



## Fast Finality in Filecoin Testing Updates
#### Masih (FilOz)
---
## Key Updates
- **F3 Progress on Calibnet:**
  - F3 is live and making progress on Calibnet.
  - Several bug fixes implemented, including:
    - Participation API edge cases in small networks with uneven power distribution.
    - Power table diff calculations in F3.
  - Enhanced monitoring and tooling for querying F3 state have been merged into Lotus.

- **Testing Strategy:**
  - Extended testing on Calibnet to monitor network behavior and edge case handling.
  - Network currently in catch-up mode with higher bandwidth usage expected to normalize.
  - A public dashboard for F3 metrics is planned, estimated to go live by the end of November.

## Next Steps
- Continue monitoring Calibnet and evaluate F3 performance against expectations.
- Finalize public dashboard for community visibility.
- Collect more data to confirm readiness for F3 activation in NV25.

## Blockers
- Need for sustained testing and data collection to assess F3 stability and readiness.

## Call to Action
- Implementation teams to produce detailed monitoring reports and postmortems.
- Revisit F3 readiness for NV25 activation once more data is available.

## nv25 Current Schedule - Discussion 
#### Lucky Nwachukwu (Filecoin Foundation)
---
Mainnet for NV25 is tentatively scheduled for April 16, 2025, with Calibnet on March 19, 2025.
- Discussion on potentially advancing F3 activation to early January 2025 as part of NV25.
- Resource availability during holiday periods (Christmas, New Year, and Lunar New Year) is a concern.
- Confirmation needed from:
  - F3 team on stability and data readiness.
  - Implementation teams (e.g., Forest) on resource availability for network skeleton.

## Implementation Considerations
- Additional FIPs for NV25 unlikely due to time constraints and ongoing holiday schedules.
- Focus remains on F3 activation readiness.

## Next Steps
- F3 team to provide updated data and monitoring insights by next Wednesday.
- Public discussion of timeline deferred until more evidence and confirmation are gathered.
- Lucky to share a discussion post in the Core Devs channel regarding group composition and engagement improvements.

## Call to Action
- Engage with Lucky's upcoming Core Devs channel discussion post to provide feedback on group structure and participation.






---
