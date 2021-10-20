const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");



const sitemap =  async (req, res) => {
    // An array with your links
    const links = [
        { url: "/", changefreq: "daily", priority: 0.3 },
        { url: "/nos-services/", changefreq: "daily", priority: 0.3 },
        { url: "/a-propos/", changefreq: "daily", priority: 0.3 },
        { url: "/contact/", changefreq: "daily", priority: 0.3 },
        { url: "/mentions-legales/", changefreq: "daily", priority: 0.3 },
        { url: "/politique-de-confidentialite/", changefreq: "daily", priority: 0.3 },
        { url: "/nos-services/site-web/", changefreq: "daily", priority: 0.3 },
        { url: "/nos-services/application-web/", changefreq: "daily", priority: 0.3 },
        { url: "/nos-services/e-commcerce/", changefreq: "daily", priority: 0.3 },
        { url: "/nos-services/conception/", changefreq: "daily", priority: 0.3 },
        { url: "/nos-services/developpement/", changefreq: "daily", priority: 0.3 },
        { url: "/nos-services/referencement/", changefreq: "daily", priority: 0.3 },
        { url: "/travaux/trendcorner/", changefreq: "daily", priority: 0.3 },
        { url: "/travaux/medtandem/", changefreq: "daily", priority: 0.3 },
        { url: "/travaux/onepalm-surf/", changefreq: "daily", priority: 0.3 },
        { url: "/travaux/dashboard/", changefreq: "daily", priority: 0.3 },
    ];

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
};

export default sitemap;