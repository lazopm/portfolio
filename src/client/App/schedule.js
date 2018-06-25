export default async function() {
    this.newLine();
    await this.typeOut('Hi there!');
    await this.sleep(1000)
    this.newLine();
    this.newLine();
    await this.typeOut('My name is ');
    this.appendToLastLine('<h1>');
    await this.typeOut('Pablo Lazo');
    this.appendToLastLine('</h1>');
    await this.typeOut('. Nice to meet you!');
    await this.sleep(500);
    this.newLine();
    await this.typeOut('Thank you for stopping by my portfolio.');
    this.newLine();
    await this.sleep(500);
    this.newLine();
    await this.sleep(500);
    await this.typeOut('Check out some of my work below, or drop me a line at ');
    this.appendToLastLine('<a href="mailto:hi@lazopm.com">');
    await this.typeOut('hi@lazopm.com'); this.appendToLastLine('</a>');
    await this.typeOut('.');

    this.newLine();
    await this.sleep(500);
    await this.typeOut('You can check out the ');
    this.appendToLastLine('<a href="https://github.com/lazopm/portfolio">');
    await this.typeOut('source code');
    this.appendToLastLine('</a>');
    await this.typeOut(' for this page on my ')
    this.appendToLastLine('<a href="https://github.com/lazopm">');
    await this.typeOut('github');
    this.appendToLastLine('</a>');
    await this.typeOut('.');

    this.newLine();
    this.newLine();
    await this.sleep(500)
    await this.typeOut('-Pablo');
    await this.sleep(500)
    return;
};
