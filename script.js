window.onload = function() {
    var canvas = document.getElementById('picassoCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Set canvas size
        canvas.width = 200;
        canvas.height = 200;

        // Draw abstract shapes
        ctx.fillStyle = "#FFD700"; // Gold
        ctx.beginPath();
        ctx.moveTo(100, 0);
        ctx.lineTo(200, 100);
        ctx.lineTo(100, 200);
        ctx.lineTo(0, 100);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#AFEEEE"; // PaleTurquoise
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI * 2, true); // Circle
        ctx.fill();

        // Add some dynamic lines for visual interest
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 200);
        ctx.moveTo(200, 0);
        ctx.lineTo(0, 200);
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();
    }
};
