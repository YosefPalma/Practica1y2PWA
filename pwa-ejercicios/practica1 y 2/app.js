// Mostrar el manifiesto en consola al presionar el botón (útil para la prueba)
document.getElementById('checkManifest').addEventListener('click', async () => {
  try {
    const resp = await fetch('./manifest.json');
    if (!resp.ok) throw new Error('No se pudo cargar manifest.json');
    const manifest = await resp.json();
    console.log('Manifest.json cargado:', manifest);
    alert('Manifest cargado. Revisa la consola (F12) > Application > Manifest');
  } catch (err) {
    console.error(err);
    alert('Error al cargar manifest.json. Revisa la consola.');
  }
});

// Registrar un service worker básico (opcional pero recomendado para PWA)
// Crea también un archivo "sw.js" si quieres caching. Esto solo registra si existe.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('ServiceWorker registrado con éxito:', reg.scope))
      .catch(err => console.error('Error al registrar el ServiceWorker:', err));
  });
}
