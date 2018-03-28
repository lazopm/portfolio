const sleep = sec => new Promise(resolve => setInterval(resolve, 1000*sec));
test('test 1', async () => {
    expect.assertions(1);
    await sleep(4);
    expect(true).toBe(true);
});
test('test 2', async () => {
    expect.assertions(1);
    await sleep(3);
    expect(true).toBe(true);
});
test('test 3', async () => {
    expect.assertions(1);
    await sleep(1);
    expect(true).toBe(true);
});
