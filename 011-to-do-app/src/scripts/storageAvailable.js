function storageAvailabilityChecker(type) {
    let storage

    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }

    catch(e) {
      return (
      e instanceof DOMException &&
      e.name === "QuotaExceedError" &&
      storage &&
      storage.length !== 0
      );
    }
}

export function isStorageAvailable() {
  if (storageAvailabilityChecker("localStorage")) {
    console.log("Local storage available");
  }

  else {
    console.log("Local storage unavailable");
  }
}
