export default async function() {
    await this.sleep(1000)
    this.setState({
        mode: 'INSERT',
        cursor: true,
    });
    this.newLine();
    await this.typeOut('Hi there! I\'m Pablo.');
    await this.sleep(500);
    await this.typeOut(' Thanks for visiting my portfolio.');
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
    this.newLine();

    await this.sleep(1000)
    this.newLine();
    await this.typeOut('PS: I\'m still building this. Sorry if some stuff doesn\'t work!');
    await this.sleep(1000)
    this.setState({
        mode: 'NORMAL',
        cursor: false,
        fileType: 'text',
        fileName: '~/welcome.txt',
    });
};
