import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});
	window.addEventListener("resize", () =>{
		
		console.log("resized!");
		const scaleX = window.innerWidth / app.screen.width; 
		const scaleY = window.innerHeight / app.screen.height ;
		const scale = Math.min(scaleX, scaleY);

		const gameWidth = Math.round(app.screen.width * scale);
		const gameHeight = Math.round(app.screen.height * scale);

		const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
		const marginVertical = Math.floor((window.innerHeight - gameHeight)/2);

		const view = app.view as HTMLCanvasElement;
		view.style.width = gameWidth + "px";
		view.style.height = gameHeight + "px";

		view.style.marginLeft = marginHorizontal + "px";
		view.style.marginRight = marginHorizontal + "px";

		view.style.marginTop = marginVertical + "px";
		view.style.marginBottom = marginVertical + "px";

	});
	window.dispatchEvent(new Event("resize"));
 Assets.add("Clampy","./clampy.png" );
Assets.add("myDino","./dino.png" );

Assets.load(["Clampy","myDino"]).then(() => {

const dino: Sprite = Sprite.from("./dino.png");

console.log("Hola mundo", dino.width, dino.height);
// clampy.anchor.set(0.5);

dino.x = 0;
dino.y = 0;

dino.scale.y = 0.5;
dino.scale.x = 0.5;



app.stage.addChild(dino);

});