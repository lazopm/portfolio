const sleep = sec => new Promise(resolve => setInterval(resolve, 1000*sec));
test('test 4', async () => {
    expect.assertions(1);
    await sleep(4);
    expect(true).toBe(true);
});
test('test 5', async () => {
    expect.assertions(1);
    await sleep(3);
    expect(true).toBe(true);
});
test('test 6', async () => {
    expect.assertions(1);
    await sleep(1);
    expect(true).toBe(true);
});
