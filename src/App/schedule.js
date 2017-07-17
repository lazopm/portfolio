import sleep from 'util/sleep';

export default async function() {
    await sleep(1000)
    this.setState({
        mode: 'INSERT',
        cursor: true,
    });
    this.newLine();
    await this.typeOut('Hello! I\'m Pablo, I make web stuff.');

    this.newLine();
    await sleep(500);
    await this.typeOut('Thanks for visiting my portfolio!');

    this.newLine();
    await sleep(500);
    await this.typeOut('Check out some of my work below, or drop me a line at ');
    this.appendToLastLine('<a href="mailto:lazopm@gmail.com">');
    await this.typeOut('lazopm@gmail.com'); this.appendToLastLine('</a>');
    await this.typeOut('.');

    this.newLine();
    await sleep(500);
    await this.typeOut('You can check out the ');
    this.appendToLastLine('<a href="https://github.com/lazopm/portfolio">');
    await this.typeOut('source code');
    this.appendToLastLine('</a>');
    await this.typeOut(' for this page at my ')
    this.appendToLastLine('<a href="https://github.com/lazopm">');
    await this.typeOut('github');
    this.appendToLastLine('</a>');
    await this.typeOut('.');

    this.newLine();
    this.newLine();
    await sleep(500)
    await this.typeOut('-Pablo');

    await sleep(2000)
    this.setState({
        mode: 'NORMAL',
        cursor: false,
        fileType: 'text',
        fileName: '~/welcome.txt',
    });
};
