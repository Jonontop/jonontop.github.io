//TypeIt in jQuery
jQuery(document).ready(function($) {
  new TypeIt("#type-it", {
      strings: ["Jon Pečar Anželak"],
      speed: 100,
      waitUntilVisible: true,
      loop: true,
      html: true,
  })
  .pause(200)
  .delete(17)
  .type("Web Developer")
  .pause(200)
  .delete(13)
  .type("Designer")
  .pause(200)
  .delete(8)
  .type("3D Modeler")
  .pause(200)
  .delete(10)
  .type("Server Admin")
  .pause(200)
  .delete(12)
  .pause(1000)
  .go();
});
