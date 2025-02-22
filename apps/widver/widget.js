/* jshint esversion: 6 */
(() => {
  var width = 28,
    ver = process.env.VERSION.split('.');

	// Example: if ver is 2v11 instead of 2v10.142 write "Rel" (Release) instead of Build number
    if(typeof ver[1] === 'undefined'){ver[1] = "Rel";}

  function draw() {
    g.reset().setColor(0, 0.5, 1).setFont("6x8", 1);
    g.drawString(ver[0], this.x + 2, this.y + 4, true);
    g.setFontAlign(0, -1, 0).drawString(ver[1], this.x + width / 2, this.y + 14, true);
  }
  WIDGETS["version"] = { area: "tr", width: width, draw: draw };
})();
