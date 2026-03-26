function normalizeUnits(manifest) {
  const normalizedManifest = { ...manifest };

  if (normalizedManifest.unit === "lb") {
    normalizedManifest.weight = normalizedManifest.weight * 0.45;
  }

  normalizedManifest.unit = "kg";
  return normalizedManifest;
}

function validateManifest(manifest) {
  const errors = {};

  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}