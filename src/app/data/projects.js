// --- src/app/data/projects.js (new file) ---
export const projects = [
    {
      slug: "pcb-soldering-robot",
      title: "CNC Precision PCB Soldering Robot",
      blurb: "Core-XY stage, Pi Pico firmware, Raspberry Pi vision/ML QA-QC.",
      href: "https://github.com/chaffybird56/PCB-Soldering-Robot", // TODO: confirm exact repo path
      thumb: "/projects/pcb-soldering-robot.jpg", // TODO: drop image or use .mp4
      tags: ["Embedded", "Controls/Robotics", "CV/ML"],
    },
    {
      slug: "home-energy-monitor",
      title: "Home Energy Monitor + Dashboard",
      blurb: "ESP32/MQTT → FastAPI/TimescaleDB → React dashboard, simulator included.",
      href: "https://github.com/chaffybird56/Home-EnergyMonitor", // TODO: confirm
      thumb: "/projects/home-energy-monitor.jpg", // TODO
      tags: ["IoT", "Backend", "Data Viz"],
    },
    {
      slug: "inverted-pendulum-observer",
      title: "Inverted Pendulum — Output-Feedback + Observer",
      blurb: "Full-state observer estimates unmeasured joint velocities; sim + write-up.",
      href: "https://github.com/chaffybird56/inverted-pendulum-observer", // TODO
      thumb: "/projects/inverted-pendulum.jpg", // TODO
      tags: ["Control Systems", "MATLAB/Simulink"],
    },
    {
      slug: "dsp-dft-fmcw",
      title: "Frequency-Domain Sensing: DFT & FMCW FFT",
      blurb: "DFT intuition on speech + FFT chain for FMCW beat → range bins.",
      href: "https://github.com/chaffybird56/DFT-and-FMCW-DSP", // TODO
      thumb: "/projects/dsp-fmcw.jpg", // TODO
      tags: ["DSP", "C/C++", "TI DSP"],
    },
    {
      slug: "2d-grid-map-solver",
      title: "2D Grid Map Solver (Visualizer)",
      blurb: "Path solver demo with clean math rendering and performance notes.",
      href: "https://github.com/chaffybird56/2D-Grid-Map-Solver", // TODO
      thumb: "/projects/2d-grid.jpg", // TODO
      tags: ["Algorithms", "Visualization"],
    },
    {
      slug: "rf-microwave-notes",
      title: "RF & Microwave Notes",
      blurb: "Study notes and small experiments across transmission lines & filters.",
      href: "https://github.com/chaffybird56/rf-microwave-notes", // TODO
      thumb: "/projects/rf-notes.jpg", // TODO
      tags: ["RF/MW"],
    },
  ];
  