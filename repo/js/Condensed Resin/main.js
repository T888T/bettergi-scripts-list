(async function () {
    setGameMetrics(1920, 1080, 2); // 设置游戏窗口大小和DPI
    keyPress("F");
    await sleep(3000); 
    click(960, 540); 
    await sleep(1000); 
    click(1750, 1010);
    await sleep(5000); 
    click(975, 900); 
    await sleep(1000); 
    keyPress("Escape");

    log.info("已完成合成浓缩树脂");
})();