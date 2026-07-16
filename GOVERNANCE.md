# Governance

This document outlines the roles and processes that govern Bombshell projects. We favor clear roles and written decisions over invisible hierarchies—progress shouldn't depend on proximity to a small group of insiders.

> [!IMPORTANT]
> All community members must follow the [Code of Conduct (CoC)](CODE_OF_CONDUCT.md). CoC violations are handled according to our [Moderation](#moderation) process.

## Get Involved

Every contribution matters—writing code, fixing typos, chatting in [Discord](https://bomb.sh/chat), sharing on social media, reviewing PRs, or blogging about Bombshell. We recognize all contributions that improve our community.

## Contributor Roles

Each role comes with specific privileges and responsibilities. Roles are available to **all members**—not just people who write code.

We look for two things in contributors:

- **Being present**&mdash;showing up and participating.
- **Being kind**&mdash;fostering welcoming communication in PRs, issues, Discord, and beyond.

Roles recognize contributions you've already made. If you wish to step back, you can—no questions asked. See [Alumni](#alumni) for details.

Contributors who violate our [Code of Conduct](CODE_OF_CONDUCT.md) may have their role revoked.

### Contributor

Have you contributed to the health, success, or growth of Bombshell? You're a Contributor.

#### Examples of contributions

- Submitting a merged PR, filing a detailed bug report, or updating docs
- Helping people on GitHub, Discord, Stack Overflow, BlueSky, etc.
- Blogging, vlogging, podcasting, or livestreaming about Bombshell
- Similar contributions are also recognized

#### Privileges

- New role on [Discord](https://bomb.sh/chat): `@contributor`
- Early access to new projects, occasional swag drops, and more!

#### Responsibilities

None required—but we hope you stick around!

#### Nomination

Self-nominate via Discord or a GitHub issue, or any existing contributor can nominate you. No vote required—the barrier is intentionally low.

### Maintainer

**Maintainers** show up consistently and are invested in the long-term health of Bombshell. Some focus on code, others on Discord, docs, support, or design.

#### Privileges

- All privileges of the [Contributor role](#contributor), plus...
- `@maintainer` role on [Discord](https://bomb.sh/chat)
- Access to the private `#maintainers` channel on Discord
- Invitation to the `bombshell-dev` organization on GitHub
- Ability to moderate Discord to remove spam, harmful speech, etc.
- Ability to push branches directly to the organization (personal forks no longer needed)
- Ability to review and merge GitHub PRs
- Ability to vote on role nominations

#### Responsibilities

- Participate in the project as a team player
- Bring a friendly, welcoming voice to the Bombshell community
- Triage new issues
- Review pull requests

#### Nomination

- To be nominated, you should already be performing some of the responsibilities of a Maintainer
- Any existing Maintainer (or above) can nominate you
- Once nominated, existing Maintainers vote; simple majority approves

### Core

**Core** members are Maintainers with outsized impact and significant influence on project direction. Not every Maintainer will reach this level, and that's okay.

#### Privileges

- All privileges of the [Maintainer role](#maintainer), plus...
- `@core` role on [Discord](https://bomb.sh/chat)
- Access to the private `#core` channel on Discord
- Invitation to the `core` team on GitHub
- Ability to vote on major initiatives and RFDs

#### Responsibilities

- All responsibilities of Maintainer, plus...
- Ownership over specific areas and the long-term health of the project
- Leadership as a role model to other contributors

#### Nomination

- To be nominated, you should already be performing some of the responsibilities of a Core member
- Any existing Core member can nominate you
- Once nominated, existing Core members vote; simple majority approves

### Organizer

The **Organizer** role exists to resolve disputes, keep the project accountable, and break ties when needed.

This is not a "leader" role&mdash;the Organizer is a facilitator and tiebreaker. The role can be held by a single person and is reevaluated on an annual basis.

#### Responsibilities

- Resolve disputes that Core cannot reach consensus on
- Break ties in votes when needed
- Ensure governance processes are followed
- Hold the project accountable to its stated values

#### Nomination

- Core members nominate an Organizer when the need arises
- Requires consensus among Core members

## Decision Making

We bias toward async, written communication. Most decisions happen through:

- **GitHub Issues and PRs:** For code changes, bug fixes, and smaller improvements
- **Discord discussions:** For quick questions and informal coordination
- **RFDs:** For significant changes that need broader input (see below)

### Voting

When a vote is needed (role nominations, contested decisions):

- Simple majority approves for role nominations
- Core consensus for major project decisions
- Organizer breaks ties when consensus cannot be reached

## Request For Discussion (RFD)

When decisions need broader input, we use a Request For Discussion process inspired by [Oxide](https://oxide.computer/blog/rfd-1-requests-for-discussion).

### When to use an RFD

- Significant new features or architectural changes
- Process or governance changes
- Anything that benefits from written discussion and a permanent record

### Process

1. **Draft:** Author creates an RFD as a markdown file in the [`bombshell-dev/rfd`](https://github.com/bombshell-dev/rfd) repository and opens a PR
2. **Discussion:** Discussion happens async in PR comments (minimum 5 business days)
3. **Decision:** Core reviews feedback and decides; Organizer breaks ties if needed
4. **Record:** Merged RFDs become a permanent organizational record

Proposals are written down, discussed publicly, and resolved in the open.

## Other Roles

### Project Teams

Beyond contributor roles, there are teams organized around specific projects and initiatives. Joining a team is a good way to start contributing.

### Moderator

**Moderator** is available to Maintainers+ who actively take on moderation duties. Trivial tasks (removing spam) can be handled unilaterally; non-trivial issues (CoC violations) should involve the full Moderator team or Core.

#### Privileges

- `@mods` role on [Discord](https://bomb.sh/chat)
- Access to the private `#moderators` channel on Discord

#### Nomination

Any Maintainer (and above) can self-nominate by messaging the maintainers on Discord.

### Admin

**Admin** provides fallback operational access for GitHub org settings, Discord server settings, and app permissions when the Organizer is unreachable. The Organizer always holds Admin; up to 2–3 additional Core members may also hold it.

Admin confers **no** special governance standing—no extra vote weight, dispute authority, or Organizer powers.

#### Privileges

- `@admin` role on [Discord](https://bomb.sh/chat)
- GitHub organization admin access (org/repo settings and app permissions)
- Discord server admin access needed to unblock operational settings

#### Nomination

- The Organizer holds Admin by default
- Any Core member can nominate an additional Core member for Admin
- Once nominated, existing Core members vote; simple majority approves
- At most 2–3 Core members may hold Admin in addition to the Organizer

### Alumni

**Alumni** is a designation for Maintainers+ who have stepped away from the project and no longer contribute regularly.

Life is fluid—it's natural that involvement shifts as priorities do. There's never any shame in stepping back, so the Alumni role exists for a few practical reasons:

- **Security:** Inactive accounts with administrative access pose a risk if compromised. Moving to Alumni reduces that surface area.
- **Funding:** When resources are allocated among contributors, it's simpler to distribute them among active members.
- **Ecosystem health:** Keeping decision-making power with people who are actively engaged helps the project stay responsive.

#### Becoming Alumni

You can become Alumni in two ways:

- **Voluntary:** Resign from your role at any time by notifying Core. No questions asked, no hard feelings.
- **Inactivity:** After an extended period of inactivity, Core will reach out. If there's no response within 30 days, the contributor moves to Alumni status. This keeps the process fair for everyone while ensuring active maintenance isn't blocked.

#### Privileges

- `@alumni` role on [Discord](https://bomb.sh/chat)
- You remain part of the Bombshell community

Alumni are always welcome to return! Rejoining as an active contributor follows the normal nomination process for the relevant role.

## Moderation

How Code of Conduct violations are reviewed.

### Reporting

Anyone may report a violation:

- **Private:** Email or DM a Core member
- **Public:** GitHub comment (`@bombshell-dev/core`) or Discord (`@mods`)

### Review

If a report lacks detail, reviewers will gather more information before acting. They will determine:

- What happened
- Whether this event constitutes a Code of Conduct violation
- Who, if anyone, was involved in the violation
- Whether this is an ongoing situation

In the event of any conflict of interest, reviewers must recuse themselves.

### Resolution

Responses are determined based on the information gathered and may include:

- Taking no further action
- Issuing a reprimand (private or public)
- Asking for an apology (private or public)
- Permanent ban from the GitHub org and Discord server
- Revoked contributor status

---

Inspired by [Astro](https://github.com/withastro/.github/blob/main/GOVERNANCE.md) and [Oxide](https://oxide.computer/blog/rfd-1-requests-for-discussion)
