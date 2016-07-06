var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    logo_png:'res/logo.png',
    mainScene_json:'res/MainScene.json',
    chapter_json:'res/chapter.json',
    chapter1_json:'res/chapter1.json',
    gameBg1_1:'res/game1_1.json',
    playInfo_json:'res/play_info.json',
    bgm_mp3:'res/bgm.mp3',
    plane_png:'res/plane.png',
    bullet_png:'res/img_bullet.png',
    normalEnemy_png:'res/normal-enemy.png',
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}