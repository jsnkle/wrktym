export const WORK = [
  {
    id: 1,
    title: "upgrade stage2 environment",
    flow: "upgrade in place",
    worksteps: [
      {
        title: "perform backup",
        status: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
          "doloremagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
          "commodo consequat.",
        checklist: [
          { title: "deactivate all plugins EXCEPT timber", status: false },
          { title: "click upgrade link from wp-admin", status: false },
          { title: "confirm new version number", status: false },
          { title: "smoke test wp-admin features", status: false },
        ],
        notes:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor\n" +
          "doloremagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua\n" +
          "commodo consequat.",
      },
    ],
  },
];
