const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Store the event so it can be triggered later
let deferredPrompt;

// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt from showing immediately
  event.preventDefault();
  // Save the event for triggering later
  deferredPrompt = event;
  // Show the install button
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Check if the deferred prompt event is available
  if (deferredPrompt) {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user's response
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    // Reset the deferred prompt variable
    deferredPrompt = null;
    // Hide the install button
    butInstall.style.display = 'none';
  }
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed successfully');
  // Clear the deferred prompt since the app is installed
  deferredPrompt = null;
});