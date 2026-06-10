// Highlighted builds grouped for employer-facing scan (hardware / control / RF / AI).

export const highlightCategories = [
  {
    id: "hardware",
    label: "hardware & robotics",
    emoji: "🔧",
    items: [
      {
        href: "https://github.com/chaffybird56/PCBSolderRobot",
        title: "Capstone — Autonomous PCB Soldering Robot",
        note: "🏆 1st @ McMaster Expo · CoreXY + vision QA",
      },
      {
        href: "https://github.com/chaffybird56/Rotational-3D-LiDAR",
        title: "Rotational 3D LiDAR",
        note: "MCU + ToF → point clouds",
      },
      {
        href: "https://github.com/chaffybird56/MuscleMate",
        title: "MuscleMate",
        note: "EMG-driven arm for sterilization workflow",
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
        title: "Wattboard",
        note: "Traction power & load analytics dashboard",
      },
      {
        href: "https://github.com/chaffybird56/MissionControl-AMR",
        title: "MissionControl-AMR",
        note: "Browser fleet map, plan & monitor AMRs",
      },
      {
        href: "https://github.com/chaffybird56/Upright-Pendulum",
        title: "Upright Pendulum",
        note: "Observer + state-feedback stabilization",
      },
      {
        href: "https://github.com/chaffybird56/Home-EnergyMonitor",
        title: "Home-EnergyMonitor",
        note: "MQTT → Flask live energy tracking",
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
        title: "ClearPath-Radar",
        note: "Clutter-free range/Doppler MTI pipeline",
      },
      {
        href: "https://github.com/chaffybird56/CAN-RTOS-Sim",
        title: "CAN-RTOS Sim",
        note: "Timing & fault injection on a busy CAN bus",
      },
      {
        href: "https://github.com/chaffybird56/RadioForge",
        title: "RadioForge",
        note: "5G/LTE RF bench automation + live dashboard",
      },
      {
        href: "https://github.com/chaffybird56/F-Domain-Sensing",
        title: "F-Domain-Sensing",
        note: "FMCW radar FFT on TI TMS320",
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
        title: "Clink",
        note: "Acoustic health drift — Core ML on Mac",
      },
      {
        href: "https://github.com/chaffybird56/ApolloDQN",
        title: "ApolloDQN",
        note: "From-scratch DQN lunar lander (PyTorch)",
      },
      {
        href: "https://github.com/chaffybird56/morpho-plate",
        title: "Morpho-Plate",
        note: "ALPR pipeline on roadway footage",
      },
      {
        href: "https://github.com/chaffybird56/Foresight",
        title: "Foresight",
        note: "Sensor anomalies + reliability forecasting",
      },
    ],
  },
];
