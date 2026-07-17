const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles){
if (config.phases == 0){
  console.log("No phases found");
}else if (config.fault == true){
  console.log("Faulted phase!")
}else {
  for (let cycle = 0; cycle < cycles; cycle++) {
    for (const phase of config.phases) {
      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(
          "Switching to " + phase.color + " for " + phase.duration + " s"
        );
      }
    }
  }
}
}
function generateTimeline(config, cycles) {
  let timeline = [];
  let totalTime = 0;

  for (let cycle = 0; cycle < cycles; cycle++) {
    for (const phase of config.phases) {
      totalTime += phase.duration;
      timeline.push(totalTime);
    }
  }

  return timeline;
}