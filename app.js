const canvas = document.querySelector("canvas");

//canvas에 그림을 그릴 때 사용하는 게 context
const ctx = canvas.getContext("2d")

canvas.width = 800;
canvas.height = 800;

//(x, y, 가로, 세로)
//stroke를 사용하면 선만 나타난다.
//fill을 사용하면 색깔을 입혀서 나타낸다.
//맨 밑에 줄에 fill이 있으면, 위에 stroke를 해봤자 fill로 적용됨
ctx.rect(50, 50, 100, 100)
ctx.rect(150, 150, 100, 100)
ctx.rect(250, 250, 100, 100)
ctx.fill()

//새로운 경로를 생성해줌 : 즉, 위에 fill을 하고, 밑에 fill을 하면 밑의 fill
//값으로 적용되는데, beginPath 해주면, 윗 코드와 아랫코드는 분리된다.
ctx.beginPath();

ctx.rect(350, 350, 100, 100)
ctx.fillStyle = "red";
ctx.fill()
