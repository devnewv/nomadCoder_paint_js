const canvas = document.querySelector("canvas");

//canvas에 그림을 그릴 때 사용하는 게 context
const ctx = canvas.getContext("2d")

canvas.width = 800;
canvas.height = 800;

//canvas의 좌표 시스템 : 왼쪽 상단 모서리가 0, 0이다.
ctx.fillRect(50, 50, 100, 200)
