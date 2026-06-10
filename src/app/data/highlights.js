// Highlighted builds — plain-language notes; technical detail lives in project tags.

export const highlightCategories = [
  {
    id: "hardware",
    label: "hardware & robotics",
    emoji: "🔧",
    items: [
      {
        href: "https://github.com/chaffybird56/PCBSolderRobot",
        title: "capstone — autonomous pcb soldering robot",
        note: "🏆 1st @ expo · combines mechanics, power, controls, vision & software into one build",
      },
      {
        href: "https://github.com/chaffybird56/Rotational-3D-LiDAR",
        title: "rotational 3d lidar",
        note: "spins a distance sensor to map a room in 3d",
      },
      {
        href: "https://github.com/chaffybird56/MuscleMate",
        title: "musclemate",
        note: "robot arm you steer with arm-muscle signals",
      },
    ],
  },
  {
    id: "control",
    label: "control & energy",
    emoji: "⚡",
    items: [
      {
        href: "https://github.com/chaffybird56/Wattboard",
        title: "wattboard",
        note: "see where power is going before the bill spikes",
      },
      {
        href: "https://github.com/chaffybird56/MissionControl-AMR",
        title: "missioncontrol-amr",
        note: "map and dispatch a fleet of warehouse robots from a browser",
      },
      {
        href: "https://github.com/chaffybird56/Upright-Pendulum",
        title: "upright pendulum",
        note: "keeps an upside-down pendulum balanced, like balancing a broomstick",
      },
      {
        href: "https://github.com/chaffybird56/Home-EnergyMonitor",
        title: "home-energymonitor",
        note: "live home power readout on a simple dashboard",
      },
    ],
  },
  {
    id: "rf",
    label: "defence, rf & test",
    emoji: "📡",
    items: [
      {
        href: "https://github.com/chaffybird56/ClearPath-Radar",
        title: "clearpath-radar",
        note: "picks out moving targets through static clutter on radar",
      },
      {
        href: "https://github.com/chaffybird56/CAN-RTOS-Sim",
        title: "can-rtos sim",
        note: "stress-tests car-style network messages and watches nodes recover",
      },
      {
        href: "https://github.com/chaffybird56/RadioForge",
        title: "radioforge",
        note: "runs radio tests and shows pass/fail on a live bench dashboard",
      },
      {
        href: "https://github.com/chaffybird56/F-Domain-Sensing",
        title: "f-domain-sensing",
        note: "turns raw radar samples into a clean frequency picture",
      },
    ],
  },
  {
    id: "ai",
    label: "ai, ml & vision",
    emoji: "🧠",
    items: [
      {
        href: "https://github.com/chaffybird56/clink",
        title: "clink",
        note: "listens to a machine and flags when its sound drifts from healthy",
      },
      {
        href: "https://github.com/chaffybird56/ApolloDQN",
        title: "apollodqn",
        note: "teaches a lander to touch down safely by trial and error",
      },
      {
        href: "https://github.com/chaffybird56/morpho-plate",
        title: "morpho-plate",
        note: "reads license plates from road video and flags watch-list hits",
      },
      {
        href: "https://github.com/chaffybird56/Foresight",
        title: "foresight",
        note: "spots when sensor readings start drifting before something breaks",
      },
    ],
  },
];
