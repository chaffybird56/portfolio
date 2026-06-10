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
        note: "spins a tof sensor on a stepper mount to sweep a room and build a 3d point cloud",
      },
      {
        href: "https://github.com/chaffybird56/MuscleMate",
        title: "musclemate",
        note: "myoelectric robot arm — muscle signals from your forearm drive safe instrument-handling motions",
      },
      {
        href: "https://github.com/chaffybird56/F-Domain-Sensing",
        title: "f-domain-sensing",
        note: "turns raw radar samples into a clean frequency picture on an embedded dsp chip",
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
        note: "multi-site dashboard — tracks live power, spots spikes and waste, and estimates daily cost across home, lab, or facility",
      },
      {
        href: "https://github.com/chaffybird56/BatteryPack",
        title: "batterypack",
        note: "models how a lithium pack charges, heats, and delivers power before hardware sign-off",
      },
      {
        href: "https://github.com/chaffybird56/MissionControl-AMR",
        title: "missioncontrol-amr",
        note: "map and dispatch a fleet of warehouse robots from a browser",
      },
      {
        href: "https://github.com/chaffybird56/Upright-Pendulum",
        title: "upright pendulum",
        note: "state-feedback and observer-based control stabilizes an inverted pendulum in real time",
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
        note: "stress-tests car-style network traffic, injects faults, and manages node recovery live",
      },
      {
        href: "https://github.com/chaffybird56/RadioForge",
        title: "radioforge",
        note: "runs radio tests and shows pass/fail on a live bench dashboard",
      },
      {
        href: "https://github.com/chaffybird56/Foresight",
        title: "foresight",
        note: "spots when sensor readings start drifting before something breaks",
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
        note: "trains a lunar lander to touch down softly through trial and error in simulation",
      },
      {
        href: "https://github.com/chaffybird56/morpho-plate",
        title: "morpho-plate",
        note: "reads license plates from road video and flags watch-list hits",
      },
      {
        href: "https://github.com/chaffybird56/GlucoseStream",
        title: "glucosestream",
        note: "turns continuous glucose readings into patient trends on a serverless pipeline",
      },
    ],
  },
];
