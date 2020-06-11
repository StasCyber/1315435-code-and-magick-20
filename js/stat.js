'use strict';

var Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10,
  BOTTOM: 280
};

var GAP = 10;
var FONT_GAP = 15;

var Bar = {
  WIDTH: 40,
  GAP: 50,
  HEIGHT: 150
};

var drawRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color || '#000000';
  ctx.fillRect(x, y, width, height);
};

var drawText = function (ctx, text, x, y, font, color) {
  context.font = font || '16px PT Mono';
  ctx.fillStyle = color || '#000000';
  ctx.fillText(text, x, y);
};

var getMaxTime = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomBlue = function () {
  return 'hsl(240,' + (Math.random().toFixed(2) * 100) + '%, 50%)'; // 0...1    76
};

window.renderStatistics = function (ctx, players, times) {
  drawRect(ctx, Cloud.X + GAP, Cloud.Y + GAP, Cloud.WIDTH, Cloud.HEIGHT);
  drawRect(ctx, Cloud.X, Cloud.Y, Cloud.WIDTH, Cloud.HEIGHT, '#FFFFFF');

  drawText(ctx, 'Ура вы победили!', Cloud.X + GAP * 2, Cloud.Y + GAP * 2);
  drawText(ctx, 'Список результатов:', Cloud.X + GAP * 2, Cloud.Y + GAP * 2, FONT_GAP);

  var maxTime = getMaxTime(times);

  for (var i = 0; i < players.length; i++) {
    var barItemHeight = (Bar.HEIGHT * times[i]) / maxTime;
    var barX = Cloud.X + GAP * 3 + Bar.GAP * 2 * i;

    drawRect(ctx, barX, Cloud.BOTTOM - GAP * 3 - FONT_GAP - barItemHeight, Bar.WIDTH, barItemHeight, players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomBlue());
    drawText(ctx, players[i], barX, Cloud.BOTTOM - GAP * 2);
    drawText(ctx, Math.round(times[i]), barX, Cloud.BOTTOM - GAP * 3 - FONT_GAP - barItemHeight); // 2345.54654654654
  }
};

