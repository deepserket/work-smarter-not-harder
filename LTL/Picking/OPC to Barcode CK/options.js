function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    width: document.querySelector("#width").value,
    height: document.querySelector("#height").value
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#width").value = result.width || 2;
    document.querySelector("#height").value = result.height || 20;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.local.get();
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
