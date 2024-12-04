const pageConfig = {
  title: "Story Uptime",
  links: [
    { link: 'https://github.com/hidayahhtaufik', label: 'GitHub' },
    { link: 'mailto:hidayahhtaufik12@gmail.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 2 / 60,
  // passwordProtection: 'username:password',
  monitors: [
    {
      id: 'story_validator_uptime',
      name: 'Story Validator Uptime',
      method: 'GET',
      target: 'https://api.testnet.storyscan.app/utilities/validators-uptimes?blocksCount=70'
    },
    {
      id: 'ssh_monitor',
      name: 'Example SSH Monitor',
      method: 'TCP_PING',
      target: '1.2.3.4:22'
    },
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }