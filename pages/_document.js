import Document, {Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="description" content="A site for adding friends"/>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"></link>
                    <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Gentium+Basic|Open+Sans" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript/>
                </body>
            </html>
        )
    }
}