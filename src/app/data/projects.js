// --- src/app/data/projects.js (replace file) ---
// Thumbnails: put images or short mp4 loops in /public/projects/
//   e.g., /public/projects/pcb-solder-robot.jpg  (or .mp4)

export const projects = [
    {
      slug: "pcb-solder-robot",
      title: "Autonomous PCB Soldering Robot",
      blurb: "CoreXY robot that solders THT joints end-to-end; Raspberry Pi vision + MobileNetV2 QA/QC.",
      href: "https://github.com/chaffybird56/PCBSolderRobot",
      thumb: "/projects/pcb-soldering-robot.jpg",
      tags: ["Embedded", "Robotics", "Computer Vision", "ML/AI", "PCB", "Mechanics/CAD"],
    },
    {
        slug: "apollo-dqn",
        title: "ApolloDQN",
        blurb: "From-scratch DQN—spaceship learns to land (PyTorch).",
        href: "https://github.com/chaffybird56/ApolloDQN",
        thumb: "/projects/apollo-dqn.jpg",
        tags: ["Reinforcement Learning", "PyTorch", "Python", "Deep Networks", "Agent Training"],
      },
    {
        slug: "foresight",
        title: "Foresight",
        blurb:
        "Trends KPI’s, spots anomalies, and estimates reliability from sensor and event data. Asset health monitoring for any uptime-critical operation.",
        href: "https://github.com/chaffybird56/Foresight",
        thumb: "/projects/foresight.png", 
        tags: [
        "Python",
        "Flask",
        "Sensor Monitoring",
        "Anomaly Detection",
        "Reliability",
        "Statistical Forecasting"
        ],
    },
    {
        slug: "clearpath-radar",
        title: "ClearPath-Radar",
        blurb: "Clutter-free radar processing pipeline for moving targets (range/Doppler/MTI).",
        href: "https://github.com/chaffybird56/ClearPath-Radar",
        thumb: "/projects/clearpath-radar.jpg",
        tags: ["Signal Processing", "Radar", "DSP", "MTI"],
      },
      {
        slug: "angle-based-motion-tracking",
        title: "Angle-Based-Motion-Tracking",
        blurb: "Motion estimation from angle-of-arrival using nonlinear methods.",
        href: "https://github.com/chaffybird56/Angle-Based-Motion-Tracking",
        thumb: "/projects/angle-based-motion-tracking.jpg",
        tags: ["Tracking", "AOA", "Motion Estimation", "MATLAB"],
      },
      {
        slug: "morpho-plate",
        title: "morpho-plate",
        blurb: "Lightweight ALPR/ANPR pipeline for roadway footage (real-time inclined).",
        href: "https://github.com/chaffybird56/morpho-plate",
        thumb: "/projects/morpho-plate.jpg",
        tags: ["Computer Vision", "OCR", "Python", "Image Processing"],
      },
      {
        slug: "upright-pendulum",
        title: "Upright-Pendulum",
        blurb: "Stabilizes an inverted pendulum via state-feedback and a full-state observer.",
        href: "https://github.com/chaffybird56/Upright-Pendulum",
        thumb: "/projects/inverted-pendulum.jpg",
        tags: ["Control Systems", "Observer", "Simulink", "State-Feedback", "Stabilization"],
      },
    {
      slug: "mapping-localization-av",
      title: "MappingLocalization-AV",
      blurb: "2-D occupancy grid mapper for an autonomous vehicle using LiDAR scans and wheel/IMU odometry.",
      href: "https://github.com/chaffybird56/MappingLocalization-AV",
      thumb: "/projects/2d-grid.jpg",
      tags: ["SLAM", "LiDAR", "ROS", "Autonomous Vehicles", "Jetson"],
    },
    {
      slug: "home-energy-monitor",
      title: "Home-EnergyMonitor",
      blurb: "Real-time home energy data tracker with MQTT → Flask API → dashboards.",
      href: "https://github.com/chaffybird56/Home-EnergyMonitor",
      thumb: "/projects/home-energy-monitor.jpg",
      tags: ["IoT", "Python", "MQTT", "Flask", "Energy"],
    },
   
    {
      slug: "musclemate",
      title: "MuscleMate",
      blurb: "Muscle-powered robotic arm concept for surgical sterilization; EMG + signal processing.",
      href: "https://github.com/chaffybird56/MuscleMate",
      thumb: "/projects/musclemate.jpg",
      tags: ["Robotics", "EMG", "Signal Processing", "Python"],
    },
    
    {
      slug: "f-domain-sensing",
      title: "F-Domain-Sensing",
      blurb: "DFT exploration + FMCW radar FFT on TI TMS320.",
      href: "https://github.com/chaffybird56/F-Domain-Sensing",
      thumb: "/projects/dsp-fmcw.jpg",
      tags: ["DSP", "DFT/FFT", "FMCW Radar", "TMS320", "MATLAB"],
    },
    
    {
      slug: "rotational-3d-lidar",
      title: "Rotational-3D-LiDAR",
      blurb: "Microcontroller-driven LiDAR rig generating 3D point clouds.",
      href: "https://github.com/chaffybird56/Rotational-3D-LiDAR",
      thumb: "/projects/rotational-3d-lidar.jpg",
      tags: ["Embedded", "C", "MSP432", "LiDAR", "Point Cloud"],
    },
    
    {
      slug: "optimal-clusters",
      title: "optimal-clusters",
      blurb: "Adaptive Color Quantization via optimal clustering for image compression.",
      href: "https://github.com/chaffybird56/optimal-clusters",
      thumb: "/projects/optimal-clusters.jpg",
      tags: ["Python", "Clustering", "Image Compression"],
    },
    
    {
      slug: "pixelweave",
      title: "PixelWeave",
      blurb: "Reconstructs full-color images from a sensor mosaic (MATLAB).",
      href: "https://github.com/chaffybird56/PixelWeave",
      thumb: "/projects/pixelweave.jpg",
      tags: ["MATLAB", "Algorithms", "Bayesian Optimization", "Demosaicing"],
    },
  ];
  